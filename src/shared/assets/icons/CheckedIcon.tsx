import Svg, {Path} from 'react-native-svg';
import React from 'react';

export const CheckedIcon = () => {
  return (
    <Svg width={31} height={31} fill="none">
      <Path
        d="M21.756.5H9.186C3.726.5.471 3.755.471 9.215V21.77c0 5.475 3.255 8.73 8.715 8.73h12.555c5.46 0 8.715-3.255 8.715-8.715V9.215c.015-5.46-3.24-8.715-8.7-8.715Zm.885 11.55-8.505 8.505a1.124 1.124 0 0 1-1.59 0L8.301 16.31a1.132 1.132 0 0 1 0-1.59 1.132 1.132 0 0 1 1.59 0l3.45 3.45 7.71-7.71a1.132 1.132 0 0 1 1.59 0c.435.435.435 1.14 0 1.59Z"
        fill="#469D3E"
      />
    </Svg>
  );
};
