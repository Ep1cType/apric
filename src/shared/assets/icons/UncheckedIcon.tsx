import React from 'react';
import Svg, {Path} from 'react-native-svg';

export const UncheckedIcon = () => {
  return (
    <Svg width={15} height={11} fill="none">
      <Path
        opacity={0.34}
        d="m1.096 5.5 4.245 4.245 8.505-8.49"
        stroke="#3B3B3B"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
