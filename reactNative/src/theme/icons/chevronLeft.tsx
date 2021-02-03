import React from 'react';
import { Svg, Polygon } from 'react-native-svg';
import Color from '../colors';

export interface Props {
  size?: number;
  color?: string;
}

function ChevronLeft({
  size = 15,
  color = Color.DARK_GREY,
}: Props): React.ReactElement {
  return (
    <Svg viewBox="0 0 407.436 407.436" width={size} height={size}>
      <Polygon
        fill={color}
        points="315.869,21.178 294.621,0 91.566,203.718 294.621,407.436 315.869,386.258 133.924,203.718"
      />
    </Svg>
  );
}

export default ChevronLeft;
