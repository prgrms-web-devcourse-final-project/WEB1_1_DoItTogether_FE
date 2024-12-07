import { DotLottieReact } from '@lottiefiles/dotlottie-react';

interface LottieIconProps {
  src?: string;
  width?: number | string;
  height?: number | string;
}

const LottieIcon: React.FC<LottieIconProps> = ({
  src = 'https://lottie.host/81d304c1-8001-421b-898c-ec9ea8e3deef/15cCQ5bfPp.json',
  width = 100,
  height = 'auto',
}) => {
  return <DotLottieReact src={src} loop autoplay width={width} height={height} />;
};

export default LottieIcon;
