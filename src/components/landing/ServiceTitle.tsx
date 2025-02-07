import { motion } from 'framer-motion';
import LogoIcon from '@/components/common/icon/LogoIcon';

const ServiceTitle = () => {
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
    <section aria-label='서비스 이름'>
      <div className='flex flex-col items-center justify-center gap-6 pt-16 text-24 font-bold'>
        <motion.p className='flex justify-center text-sub font-label' variants={item}>
          함께라서 더 즐거운 집안일
        </motion.p>
        <motion.div variants={item}>
          <LogoIcon />
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceTitle;
