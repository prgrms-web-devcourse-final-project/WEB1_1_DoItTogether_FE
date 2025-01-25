import { motion } from 'framer-motion';
import BackBtn from '@/components/common/button/BackBtn/BackBtn';
import { Progress } from '@/components/common/ui/progress';
import { Step1, Step2, Step3, Step4, Step5, LoadingScreen } from '@/components/survey';
import MetaTags from '@/components/common/metaTags/MetaTags';
import {
  DUMMY_QUESTION_STEP1,
  DUMMY_QUESTION_STEP2,
  DUMMY_QUESTION_STEP3,
  DUMMY_QUESTION_STEP4,
} from '@/constants/onBoarding';
import useFunnel from '@/hooks/useFunnel';
import useLoadingState from '@/hooks/survey/useLoadingState';
import useUserName from '@/hooks/survey/useUserName';
import useSurveyState from '@/hooks/survey/useSurveyState';

const SurveyPage = () => {
  const item = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: 'easeIn',
      },
    },
  };

  const [Funnel, setStep, currentStep] = useFunnel<
    '첫번째' | '두번째' | '세번째' | '네번째' | '설문결과'
  >('첫번째');

  //로딩 상태 관리 커스텀 훅
  const { isLoading, isCompleted, setIsLoading, setIsCompleted } = useLoadingState();
  //사용자 이름을 가져오는 커스텀 훅
  const { username } = useUserName(currentStep);
  //설문을 관리하는 커스텀 훅
  const { progressStep, result, handleNextStep, handleDone, handlePrevStep } = useSurveyState({
    currentStep,
    setStep,
    setIsLoading,
    setIsCompleted,
  });

  return (
    <div className={`flex h-screen flex-col`}>
      <MetaTags
        title={'두잇투게더 - 설문조사'}
        description={'나의 집안일 스타일을 알아보세요.'}
        url={`https://doit-together.vercel.app/survey/`}
      />

      {currentStep !== '설문결과' && (
        <>
          {/* 헤더 */}
          <motion.div variants={item} initial='hidden' animate='show'>
            <div className='p-5'>
              <BackBtn handleClick={handlePrevStep} />
            </div>
            <Progress value={(progressStep / 5) * 100} className='mb-8' />
          </motion.div>
        </>
      )}

      {isLoading ? (
        <>
          <LoadingScreen username={username} isCompleted={isCompleted} />
        </>
      ) : (
        <>
          {/* 본문 */}
          <Funnel>
            <Funnel.Step name='첫번째'>
              <motion.div
                className='flex flex-1 flex-col gap-8 px-5'
                variants={item}
                initial='hidden'
                animate='show'
              >
                <Step1
                  title={`평소 정리정돈에 대해\n어떻게 생각하시나요?`}
                  questions={DUMMY_QUESTION_STEP1}
                  handleNextStep={handleNextStep}
                />
              </motion.div>
            </Funnel.Step>
            <Funnel.Step name='두번째'>
              <motion.div
                className='flex flex-1 flex-col gap-8 px-5'
                variants={item}
                initial='hidden'
                animate='show'
              >
                <Step2
                  title={`어떤 방식으로 일하는 것을\n선호하시나요?`}
                  questions={DUMMY_QUESTION_STEP2}
                  handleNextStep={handleNextStep}
                />
              </motion.div>
            </Funnel.Step>
            <Funnel.Step name='세번째'>
              <motion.div
                className='flex flex-1 flex-col gap-8 px-5'
                variants={item}
                initial='hidden'
                animate='show'
              >
                <Step3
                  title={`주변 환경이\n작업에 얼마나 영향을 주나요?`}
                  questions={DUMMY_QUESTION_STEP3}
                  handleNextStep={handleNextStep}
                />
              </motion.div>
            </Funnel.Step>
            <Funnel.Step name='네번째'>
              <motion.div
                className='flex flex-1 flex-col gap-8 px-5'
                variants={item}
                initial='hidden'
                animate='show'
              >
                {progressStep !== 5 && (
                  <Step4
                    title={`집안일을 할 때\n어떤 감정을 느끼시나요?`}
                    questions={DUMMY_QUESTION_STEP4}
                    handleNextStep={handleNextStep}
                  />
                )}
              </motion.div>
            </Funnel.Step>
            <Funnel.Step name='설문결과'>
              <div className='flex flex-1 flex-col gap-8 px-5'>
                <Step5
                  title={`${username}님의 청소성향은`}
                  results={result}
                  handleDone={handleDone}
                />
              </div>
            </Funnel.Step>
          </Funnel>
        </>
      )}
    </div>
  );
};

export default SurveyPage;
