import { motion } from 'framer-motion';
import Button from '@/components/common/button/Button/Button';
import { GoogleIcon, KakaoIcon, NaverIcon } from '@/components/common/icon';

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

  const PROVIDER_ICONS = {
    naver: <NaverIcon />,
    google: <GoogleIcon />,
    kakao: <KakaoIcon />,
  };

  return (
    <motion.section variants={item} aria-label={`${provider} 로그인 버튼`}>
      <Button
        label={label}
        variant={provider}
        size='large'
        handleClick={handleLoginButton}
        icon={PROVIDER_ICONS[provider]}
      />
    </motion.section>
  );
};

export default LoginButton;
