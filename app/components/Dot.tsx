import { Box } from '@app/components/box';
import { BoxProps } from '@app/components/box/Box';
import { Theme } from '@app/lib/theme';
import React from 'react';

export interface DotProps extends BoxProps {
  size?: number;
  color?: keyof Theme['colors'];
}

const Dot: React.FC<DotProps> = ({ size = 8, color = 'green', ...rest }) => {
  return (
    <Box height={size} width={size} bg={color} borderRadius='round' {...rest} />
  );
};

export default Dot;
