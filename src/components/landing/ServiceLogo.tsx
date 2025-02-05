import React from 'react';
import { motion } from 'framer-motion';
import LottieIcon from '@/components/common/lottie/LottieIcon';

const ServiceLogo = () => {
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
    <motion.section variants={item} aria-label='서비스 로고' className='relative flex-1'>
      <div className='absolute left-1/2 top-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2'>
        <LottieIcon />
      </div>
    </motion.section>
  );
};

export default React.memo(ServiceLogo);
