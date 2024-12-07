import { motion } from 'framer-motion';
import Button from '@/components/common/button/Button/Button';
import SurveyTitle from '@/components/survey/SurveyTitle/SurveyTitle';
import SurveyIntroDesc from '@/components/survey/surveyIntro/SurveyIntroDesc';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import LottieIcon from '@/components/common/lottie/LottieIcon';

const SurveyIntroPage: React.FC = () => {
  const navigate = useNavigate();

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.7, // 각 요소 사이의 딜레이
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 0 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5, // 0.3초 동안 애니메이션 실행
        ease: 'easeIn', // 가속도 곡선 설정
      },
    },
  };

  return (
    <motion.div
      className={`flex h-screen flex-col justify-between px-5 pb-6 pt-10`}
      variants={container}
      initial='hidden'
      animate='show'
    >
      <div className='flex flex-col gap-5'>
        <motion.div variants={item}>
          <SurveyTitle title={`당신만의 청소 스타일을\n완성해보세요`} />
        </motion.div>
        <motion.div variants={item}>
          <SurveyIntroDesc />
        </motion.div>
      </div>
      <motion.div variants={item} className='h-96'>
        <LottieIcon />
      </motion.div>
      <motion.div variants={item}>
        <Button
          size='large'
          variant='full'
          label='시작하기'
          handleClick={() => navigate('/survey')}
        />
      </motion.div>
    </motion.div>
  );
};

export default SurveyIntroPage;
