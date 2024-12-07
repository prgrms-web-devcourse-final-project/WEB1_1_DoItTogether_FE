interface ProfileDefaultIconProps {
  width?: string | number;
  height?: string | number;
}

const ProfileDefaultIcon: React.FC<ProfileDefaultIconProps> = ({ width = 96, height = 96 }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 96 96'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <g clipPath='url(#clip0_2622_21730)'>
        <path
          d='M96 48C96 21.4903 74.5097 0 48 0C21.4903 0 0 21.4903 0 48C0 74.5097 21.4903 96 48 96C74.5097 96 96 74.5097 96 48Z'
          fill='#C6C8D0'
        />
        <path
          d='M48.0003 47.3013C52.3842 47.3013 55.9381 43.7475 55.9381 39.3636C55.9381 34.9796 52.3842 31.4258 48.0003 31.4258C43.6164 31.4258 40.0625 34.9796 40.0625 39.3636C40.0625 43.7475 43.6164 47.3013 48.0003 47.3013Z'
          fill='#F2F3F6'
        />
        <path
          d='M33.7109 61.9756C33.7109 54.8008 39.5274 48.9844 46.7023 48.9844H49.2956C56.4706 48.9844 62.2869 54.8008 62.2869 61.9756C62.2869 63.4106 61.1237 64.5739 59.6887 64.5739H36.3092C34.8742 64.5739 33.7109 63.4106 33.7109 61.9756Z'
          fill='#F2F3F6'
        />
      </g>
      <defs>
        <clipPath id='clip0_2622_21730'>
          <rect width={width} height={height} fill='white' />
        </clipPath>
      </defs>
    </svg>
  );
};

export default ProfileDefaultIcon;
