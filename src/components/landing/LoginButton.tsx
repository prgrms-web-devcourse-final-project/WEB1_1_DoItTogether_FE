import { motion } from 'framer-motion';
import Button from '@/components/common/button/Button/Button';

interface LoginButtonProps {
  handleLoginButton: () => void;
  provider: 'kakao' | 'google' | 'naver';
  label?: string;
}

const LoginButton: React.FC<LoginButtonProps> = ({ handleLoginButton, provider, label }) => {
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
    <motion.section variants={item} aria-label={`${provider} 로그인 버튼`}>
      <Button
        label={`${label}로 3초만에 시작하기`}
        variant={provider}
        size='large'
        handleClick={handleLoginButton}
      />
    </motion.section>
  );
};

export default LoginButton;
