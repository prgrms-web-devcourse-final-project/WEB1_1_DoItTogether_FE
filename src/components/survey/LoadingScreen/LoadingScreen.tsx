import LottieIcon from '@/components/common/lottie/LottieIcon';
import SurveyTitle from '@/components/survey/SurveyTitle/SurveyTitle';
import { motion } from 'framer-motion';

interface LoadingScreenProps {
  /** 사용자명 */
  username: string;
  /** 분석완료 여부 */
  isCompleted: boolean;
}

const LoadingScreen = ({ username, isCompleted }: LoadingScreenProps) => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.7,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 0 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeIn',
      },
    },
  };

  return (
    <motion.div
      className='flex h-full flex-col px-5 text-center'
      variants={container}
      initial='hidden'
      animate='show'
    >
      <motion.div variants={item} className='mt-[88px]'>
        <SurveyTitle
          title={
            <div className='text-center'>
              {isCompleted
                ? `${username}님의\n청소성향 분석이 완료되었어요`
                : 'Open AI GPT가\n당신의 청소성향을 분석하고 있어요'}
            </div>
          }
        />
      </motion.div>
      <div className='flex flex-1 items-center justify-center'>
        <motion.div variants={item} className='h-96 w-full'>
          <LottieIcon />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;
