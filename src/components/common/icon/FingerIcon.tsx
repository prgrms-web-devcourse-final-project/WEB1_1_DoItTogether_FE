import React from 'react';

interface FingerIconProps {
  className?: string;
  width?: string | number;
  height?: string | number;
  fillColor?: string;
}

const FingerIcon: React.FC<FingerIconProps> = ({
  className = 'text-main',
  width = 24,
  height = 24,
  fillColor = 'white',
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 23 22'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
    >
      <rect
        x='0.5'
        width='22'
        height='22'
        rx='11'
        fill='#19B4DF'
        className={`${fillColor !== 'white' && 'opacity-50'}`}
      />
      <rect
        x='4.86523'
        y='9.15234'
        width='2.01317'
        height='6.58071'
        rx='1'
        className={fillColor}
        fill='white'
      />
      <path
        d='M7.44573 9.93198C7.41879 9.08529 8.09785 8.38428 8.94497 8.38428H14.2537C15.0821 8.38428 15.7536 9.05585 15.7536 9.88428V15.0698C15.7536 16.2999 14.6537 17.2384 13.4389 17.0449L9.27439 16.3813C8.32728 16.2304 7.62062 15.4284 7.59012 14.4698L7.44573 9.93198Z'
        className={fillColor}
        fill='white'
      />
      <rect
        x='12.6562'
        y='8.38428'
        width='6.4782'
        height='2.4688'
        rx='1.2344'
        className={fillColor}
        fill='white'
      />
      <path
        d='M7.95184 10.6819C7.53833 10.3983 7.36127 9.79402 7.55636 9.33213L9.10265 5.67111C9.35582 5.07169 9.99609 4.8841 10.5327 5.25211C11.0693 5.62013 11.2991 6.4044 11.046 7.00383L9.14643 11.5012L7.95184 10.6819Z'
        className={fillColor}
        fill='white'
      />
    </svg>
  );
};

export default FingerIcon;
