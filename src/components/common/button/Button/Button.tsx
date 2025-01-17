import { Button as ButtonComponent } from '@/components/common/ui/button';
import React from 'react';

interface ButtonProps {
  /** 라벨 */
  label: React.ReactNode;
  /** 타입 */
  variant:
    | 'full'
    | 'select'
    | 'secondary'
    | 'disabled'
    | 'kakao'
    | 'naver'
    | 'google'
    | 'group'
    | 'onboarding';
  /** 사이즈 */
  size: 'small' | 'large';
  /** 클릭 이벤트 */
  handleClick?: () => void;
  /** 커스텀 스타일 */
  className?: string;
  disabled?: boolean;
}

const Button = ({
  label,
  variant = 'full',
  size,
  handleClick,
  className,
  disabled = false,
}: ButtonProps) => {
  return (
    <ButtonComponent
      variant={variant}
      size={size}
      onClick={handleClick}
      className={className}
      disabled={disabled}
    >
      {label}
    </ButtonComponent>
  );
};

export default React.memo(Button);
