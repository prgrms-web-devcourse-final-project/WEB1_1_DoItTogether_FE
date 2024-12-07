import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BackBtn from '@/components/common/button/BackBtn/BackBtn';
import { Progress } from '@/components/common/ui/progress';
import { Button } from '@/components/common/ui/button';
import Step1 from '@/components/survey/steps/Step1';
import Step2 from '@/components/survey/steps/Step2';
import Step3 from '@/components/survey/steps/Step3';
import Step4 from '@/components/survey/steps/Step4';
import Step5 from '@/components/survey/steps/Step5';
import LoadingScreen from '@/components/survey/LoadingScreen/LoadingScreen';
import {
  DUMMY_QUESTION_STEP1,
  DUMMY_QUESTION_STEP2,
  DUMMY_QUESTION_STEP3,
  DUMMY_QUESTION_STEP4,
} from '@/constants/onBoarding';
import { motion } from 'framer-motion';
import { postPersonalKeyword } from '@/services/onboarding/postPersonalKeyword';
import { patchMyInitState } from '@/services/user/patchMyInitState';
import { getMyInfo } from '@/services/user/getMyInfo';

interface OnBoardingProps {}

const OnBoarding: React.FC<OnBoardingProps> = ({}) => {
  const [step, setStep] = useState(1);
  const [progressStep, setProgressStep] = useState(1);
  const [answer, setAnswer] = useState<string[]>([]); // 사용자 답변
  const [isCompleted, setIsCompleted] = useState<boolean>(false); // 분석완료 여부
  const [result, setResult] = useState<string[]>([]); // 분석 결과
  const [username, setUserName] = useState<string>('사용자'); // 사용자명
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMyInfo = async () => {
      try {
        const response = await getMyInfo();
        setUserName(response.result.nickName);
      } catch (error) {
        console.error('내 정보 조회 실패:', error);
      }
    };

    fetchMyInfo();
  }, []);

  useEffect(() => {
    if (step === 0) navigate('/survey-intro');
  }, [step]);

  const item = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        duration: 0.5, // 0.3초 동안 애니메이션 실행
        ease: 'easeIn', // 가속도 곡선 설정
      },
    },
  };

  const setNextStep = async () => {
    if (step === 4) {
      // 먼저 Progress bar를 100%로 변경
      setProgressStep(5);

      // Progress bar 애니메이션이 완료될 때까지 대기
      await new Promise(resolve => setTimeout(resolve, 500));

      setStep(prev => prev + 1);
      setLoading(true);
      setIsCompleted(false);

      await new Promise(resolve => setTimeout(resolve, 2000)); //2초동안 isLoading이 true니깐 분석중입니다가 뜸..

      try {
        const response = await postPersonalKeyword({
          surveyResultText: answer,
        });

        setResult(response.result.keywords); //만약 result가 return되면 여기에 set

        setIsCompleted(true); //분석이 완료되었습니다.
        await new Promise(resolve => setTimeout(resolve, 1000)); //1초동안 분석되었습니다.가 뜸..

        setLoading(false);
      } catch (error) {
        console.error('성향 분석 실패:', error);
        setLoading(false); // 에러 시에도 로딩 상태 해제
      }
      return; // step 4일 때는 여기서 함수 종료
    }

    if (step === 5) {
      try {
        await patchMyInitState();
        navigate('/group-select');
      } catch (error) {
        console.error('초기 상태 변경 실패:', error);
      }
      return;
    }

    setStep(prev => prev + 1); // step 4가 아닐 때만 실행
    setProgressStep(prev => prev + 1);
  };

  const setPrevStep = () => {
    setStep(prev => prev - 1);
  };

  const handleAnswer = (select: string) => {
    setAnswer(prev => [...prev, select]);
  };

  const isStepVaild = () => {
    if (step === 5) return true; //결과는 항상 활성화
    return answer.length >= step;
  };

  return (
    <div className={`flex h-screen flex-col overflow-hidden`}>
      {step <= 4 && (
        <motion.div variants={item} initial='hidden' animate='show'>
          <div className='p-5'>
            <BackBtn handleClick={setPrevStep} />
          </div>
          <Progress value={(progressStep / 5) * 100} className='mb-8' />
        </motion.div>
      )}

      {loading ? (
        <div className='h-full px-0'>
          <LoadingScreen username={username} isCompleted={isCompleted} />
        </div>
      ) : (
        <motion.div className='flex h-screen flex-col gap-8 px-5'>
          {/* TODO STEP 동일구조라서 hook 으로 사용 고려 */}
          {step === 1 && (
            <Step1
              title={`평소 정리정돈에 대해\n어떻게 생각하시나요?`}
              questions={DUMMY_QUESTION_STEP1}
              handleAnswer={handleAnswer}
            />
          )}
          {step === 2 && (
            <Step2
              title={`어떤 방식으로 일하는 것을\n선호하시나요?`}
              questions={DUMMY_QUESTION_STEP2}
              handleAnswer={handleAnswer}
            />
          )}
          {step === 3 && (
            <Step3
              title={`주변 환경이\n작업에 얼마나 영향을 주나요?`}
              questions={DUMMY_QUESTION_STEP3}
              handleAnswer={handleAnswer}
            />
          )}
          {step === 4 && (
            <Step4
              title={`집안일을 할 때\n어떤 감정을 느끼시나요?`}
              questions={DUMMY_QUESTION_STEP4}
              handleAnswer={handleAnswer}
            />
          )}
          {step === 5 && (
            <div className='h-full pt-28'>
              <Step5 title={`${username}님의 청소성향은`} results={result} />
            </div>
          )}
        </motion.div>
      )}

      {!loading && (
        <motion.div className='sticky bottom-0 bg-white px-5 pb-6'>
          <Button
            size={'large'}
            variant={!isStepVaild() ? 'disabled' : 'full'}
            onClick={setNextStep}
            disabled={!isStepVaild()}
          >
            {step === 5 ? '완료' : '다음'}
          </Button>
        </motion.div>
      )}
    </div>
  );
};

export default OnBoarding;
