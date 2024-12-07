import React from 'react';

interface CheckIconProps {
  className?: string;
  width?: string | number;
  height?: string | number;
}

const CheckIcon: React.FC<CheckIconProps> = ({
  className = 'text-main',
  width = 24,
  height = 24,
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={`${className} z-10`}
    >
      <path
        d='M10.7874 17.5256C10.4776 17.5256 10.1678 17.4137 9.96131 17.0781L5.21144 11.9314C4.69515 11.372 4.69515 10.5888 5.21144 10.0294C5.72773 9.46999 6.45053 9.46999 6.96683 10.0294L10.7874 14.1691L17.6024 6.7848C18.1187 6.22538 18.8415 6.22538 19.3578 6.7848C19.8741 7.34421 19.8741 8.1274 19.3578 8.68681L11.7167 16.9662C11.4069 17.4137 11.0972 17.5256 10.7874 17.5256Z'
        fill='currentColor'
      />
    </svg>
  );
};

export default CheckIcon;
