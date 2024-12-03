import React from 'react';

interface BroomstickProps {
  fillOneClass?: string;
  fillTwoClass?: string;
  width?: string | number;
  height?: string | number;
}

const Broomstick: React.FC<BroomstickProps> = ({
  fillOneClass = 'fill-sub',
  fillTwoClass = 'fill-sub1',
  width = 140,
  height = 169,
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 140 169'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M118.751 5.55579C121.704 0.309695 128.35 -1.5495 133.596 1.403C138.842 4.3556 140.702 11.002 137.749 16.248L104.374 75.5474L85.377 64.8552L118.751 5.55579Z'
        className={fillOneClass}
      />
      <path
        d='M63.69 63.0688C66.149 58.6984 71.686 57.1496 76.057 59.6093L113.69 80.7899C118.06 83.2495 119.609 88.7867 117.15 93.157L114.792 97.3463L61.332 67.2581L63.69 63.0688Z'
        className={fillOneClass}
      />
      <path
        d='M45.6619 65.2187C47.9109 62.5509 51.7389 61.8586 54.7789 63.5698L120.5 100.558C123.506 102.25 124.908 105.825 123.853 109.109L106.352 163.62C104.947 167.998 99.8789 169.985 95.8729 167.73L10.855 119.881C6.88496 117.647 5.92696 112.352 8.86396 108.869L45.6619 65.2187Z'
        className={fillOneClass}
      />
      <path
        fill-rule='evenodd'
        clip-rule='evenodd'
        d='M27.0512 35.8018C27.0492 35.8142 27.0492 35.8301 27.0512 35.8492V35.8018ZM36.8162 52.4593C31.8112 48.1604 27.1342 36.9139 27.0512 35.8492V52.4593V69.0693C27.0492 69.0884 27.0492 69.1043 27.0512 69.1167V69.0693C27.1342 68.0045 31.8112 56.7581 36.8162 52.4593ZM27.0482 35.8019C27.0492 35.8144 27.0492 35.8302 27.0482 35.8494V35.8019ZM27.0482 69.0693V52.4594V35.8494C26.9652 36.9141 22.2882 48.1602 17.2832 52.4593C22.2882 56.7584 26.9652 68.0046 27.0482 69.0693ZM27.0482 69.0693V69.1167C27.0492 69.1043 27.0492 69.0884 27.0482 69.0693Z'
        className={fillTwoClass}
      />
      <path
        fill-rule='evenodd'
        clip-rule='evenodd'
        d='M7.04999 59.9814C7.04899 59.9904 7.04899 60.0019 7.04999 60.0157V59.9814ZM14.099 72.0057C10.486 68.9025 7.10999 60.7843 7.04999 60.0157V72.0057V83.9958C7.04899 84.0096 7.04899 84.021 7.04999 84.03V83.9958C7.10999 83.2272 10.486 75.1089 14.099 72.0057ZM7.049 59.9816C7.05 59.9906 7.05099 60.0019 7.04999 60.0157L7.049 59.9816ZM7.04999 83.9958L7.049 72.0059L7.04999 60.0157C6.98999 60.7843 3.613 68.9024 0 72.0057C3.613 75.109 6.98999 83.2272 7.04999 83.9958ZM7.04999 84.03V83.9958C7.05099 84.0096 7.05099 84.021 7.04999 84.03Z'
        className={fillTwoClass}
      />
      <path
        d='M41.834 102.512C43.169 100.14 46.174 99.2994 48.546 100.634C50.918 101.969 51.758 104.974 50.423 107.346L35.589 133.703L27 128.869L41.834 102.512Z'
        className={fillTwoClass}
      />
      <path
        d='M63.8809 114.918C65.2159 112.546 68.2209 111.706 70.5929 113.041C72.9649 114.375 73.8049 117.38 72.4699 119.752L57.6359 146.108L49.0469 141.274L63.8809 114.918Z'
        className={fillTwoClass}
      />
      <path
        d='M85.9316 127.33C87.2666 124.959 90.2716 124.118 92.6436 125.453C95.0146 126.787 95.8557 129.792 94.5207 132.164L79.6866 158.52L71.0977 153.686L85.9316 127.33Z'
        className={fillTwoClass}
      />
    </svg>
  );
};

export default Broomstick;