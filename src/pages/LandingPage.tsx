import { motion } from 'framer-motion';
import { ServiceTitle, LoginButton, ServiceLogo } from '@/components/landing';
import { useLanding } from '@/hooks/useLanding';
import MetaTags from '@/components/common/metaTags/MetaTags';

const LandingPage = () => {
  const { handleLogin } = useLanding();

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.7,
      },
    },
  };

  return (
    <>
      <MetaTags
        title={'DoItTogether 두잇투게더'}
        description={'가사 분담이 필요한 모든 이에게'}
        url={'https://doit-together.vercel.app/'}
      />

      <motion.div
        className={`mx-auto flex h-screen flex-col gap-10 px-5 text-center`}
        variants={container}
        initial='hidden'
        animate='show'
      >
        <div className='flex h-full flex-col justify-between'>
          <ServiceTitle />
          <ServiceLogo />
          <LoginButtons handleLogin={handleLogin} />
        </div>
      </motion.div>
    </>
  );
};

export default LandingPage;
