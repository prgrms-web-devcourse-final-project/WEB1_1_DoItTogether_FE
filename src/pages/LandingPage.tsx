import { motion } from 'framer-motion';
import { ServiceTitle, LoginButtons, ServiceLogo } from '@/components/landing';
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

  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };

  return (
    <>
      <MetaTags
        title={'DoItTogether 두잇투게더'}
        description={'가사 분담이 필요한 모든 이에게'}
        url={'https://doit-together.vercel.app/'}
      />

      <div className={`mx-auto flex h-screen flex-col px-5 text-center`}>
        <div className='flex h-full flex-col'>
          <motion.div
            variants={container}
            initial='hidden'
            animate='show'
            className='flex h-full flex-col'
          >
            <div>
              <motion.div variants={item}>
                <ServiceTitle />
              </motion.div>
            </div>

            <div className='flex flex-grow items-center justify-center'>
              <motion.div variants={item}>
                <ServiceLogo />
              </motion.div>
            </div>
          </motion.div>

          <div>
            <LoginButtons handleLogin={handleLogin} />
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
