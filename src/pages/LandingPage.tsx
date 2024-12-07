import Button from '@/components/common/button/Button/Button';
import { getMyInitState } from '@/services/user/getMyInitState';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import LottieIcon from '@/components/common/lottie/LottieIcon';
import LogoIcon from '@/components/common/icon/LogoIcon';
import { motion } from 'framer-motion';

const LandingPage = () => {
  const navigate = useNavigate();
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

  const handleLoginButton = () => {
    if (localStorage.getItem('access_token')) {
      navigate('/group-select');
      return;
    }
    window.location.href = `${import.meta.env.VITE_SERVER_URL}/oauth2/authorization/kakao`;
  };

  useEffect(() => {
    const checkInitialState = async () => {
      const accessToken = new URLSearchParams(location.search).get('access_token');
      if (accessToken) {
        localStorage.setItem('access_token', accessToken);
        try {
          const initState = await getMyInitState();
          initState.result ? navigate('/group-select') : navigate('/register');
        } catch (error) {
          console.error('초기 상태 확인 실패:', error);
        }
      }
    };

    checkInitialState();
  }, []);

  return (
    <motion.div
      className={`mx-auto flex h-screen flex-col gap-10 px-5 text-center`}
      variants={container}
      initial='hidden'
      animate='show'
    >
      <div className='flex flex-1 flex-col'>
        <section aria-label='서비스 이름'>
          <div className='flex flex-col items-center justify-center gap-6 pt-20 text-24 font-bold'>
            <motion.p className='flex justify-center text-sub font-label' variants={item}>
              함께라서 더 즐거운 집안일
            </motion.p>
            <motion.div variants={item}>
              <LogoIcon />
            </motion.div>
          </div>
        </section>
        <motion.section variants={item} aria-label='서비스 로고' className='relative flex-1'>
          <div className='absolute left-1/2 top-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2'>
            <LottieIcon />
          </div>
        </motion.section>
      </div>
      <motion.section variants={item} aria-label='카카오 로그인 버튼' className='sticky bottom-6'>
        <Button
          label='카카오로 3초만에 시작하기'
          variant='kakao'
          size='large'
          handleClick={handleLoginButton}
        />
      </motion.section>
    </motion.div>
  );
};

export default LandingPage;
