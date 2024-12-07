import React from 'react';

interface HeartIconProps {
  className?: string;
  width?: string | number;
  height?: string | number;
  fillColor?: string;
}

const HeartIcon: React.FC<HeartIconProps> = ({
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
        fill='#FF6898'
        className={`${fillColor !== 'white' && 'opacity-50'}`}
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M10.8606 16.5574C11.2491 16.8141 11.7502 16.8141 12.1381 16.5574C13.3719 15.7431 16.0581 13.7965 17.2155 11.6183C18.7409 8.74482 16.9495 5.87891 14.5811 5.87891C13.2313 5.87891 12.4193 6.58416 11.9701 7.19024C11.9162 7.26447 11.8454 7.32488 11.7637 7.36654C11.6819 7.40819 11.5915 7.4299 11.4997 7.4299C11.4079 7.4299 11.3175 7.40819 11.2357 7.36654C11.1539 7.32488 11.0832 7.26447 11.0292 7.19024C10.5801 6.58416 9.76806 5.87891 8.41823 5.87891C6.0499 5.87891 4.25848 8.74482 5.78448 11.6183C6.94065 13.7965 9.62806 15.7431 10.8606 16.5574Z'
        className={fillColor}
        fill='white'
      />
    </svg>
  );
};

export default HeartIcon;
