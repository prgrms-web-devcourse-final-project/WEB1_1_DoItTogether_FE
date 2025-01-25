import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { postPersonalKeyword } from '@/services/onboarding/postPersonalKeyword';
import { patchMyInitState } from '@/services/user/patchMyInitState';

type StepType = '첫번째' | '두번째' | '세번째' | '네번째' | '설문결과';

interface useSurveyStateProps {
  currentStep: StepType;
  setStep: React.Dispatch<React.SetStateAction<StepType>>;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setIsCompleted: React.Dispatch<React.SetStateAction<boolean>>;
}

const useSurveyState = ({
  currentStep,
  setStep,
  setIsLoading,
  setIsCompleted,
}: useSurveyStateProps) => {
  const [answer, setAnswer] = useState<string[]>([]);
  const [progressStep, setProgressStep] = useState(1);
  const [result, setResult] = useState<string[]>([]);

  const navigate = useNavigate();

  const handleNextStep = async (selectedItem?: string) => {
    if (selectedItem) {
      setAnswer(prev => [...prev, selectedItem]);
    }

    if (currentStep === '첫번째') {
      setProgressStep(2);
      setStep('두번째');
    } else if (currentStep === '두번째') {
      setProgressStep(3);
      setStep('세번째');
    } else if (currentStep === '세번째') {
      setProgressStep(4);
      setStep('네번째');
    } else if (currentStep === '네번째') {
      setProgressStep(5);
      await new Promise(resolve => setTimeout(resolve, 700));
      setStep('설문결과');
      //분석중입니다.
      setIsLoading(true);

      try {
        const response = await postPersonalKeyword({
          surveyResultText: answer,
        });
        setResult(response.result.keywords);
        await new Promise(resolve => setTimeout(resolve, 1500));
        //분석이 완료되었습니다.
        setIsCompleted(true);
        await new Promise(resolve => setTimeout(resolve, 1000));
        setIsLoading(false);
      } catch (error) {
        console.error('성향 분석 실패:', error);
        setIsLoading(false);
      }
      return;
    }
  };

  const handleDone = async () => {
    try {
      await patchMyInitState();
      navigate('/group-select');
    } catch (error) {
      console.error('초기 상태 변경 실패:', error);
    }
    return;
  };

  const handlePrevStep = () => {
    //프로그레스바 width 조절
    setProgressStep(prev => prev - 1);
    //뒤로가면 최근에 추가한 answer 값 초기화
    setAnswer(prev => prev.slice(0, -1));

    if (currentStep === '첫번째') {
      navigate('/survey-intro');
    } else if (currentStep === '두번째') {
      setStep('첫번째');
    } else if (currentStep === '세번째') {
      setStep('두번째');
    } else if (currentStep === '네번째') {
      setStep('세번째');
    }
  };
  return {
    progressStep,
    result,
    handleNextStep,
    handleDone,
    handlePrevStep,
  };
};

export default useSurveyState;
