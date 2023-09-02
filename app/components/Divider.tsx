import Box, { BoxProps } from '@app/components/box/Box';
import React from 'react';

export interface DividerProps extends BoxProps {
  direction?: 'vertical' | 'horizontal';
  size?: number;
}

const Divider: React.FC<DividerProps> = ({
  direction = 'horizontal',
  size = 0.5,
  ...rest
}) => {
  return (
    <Box
      height={direction === 'horizontal' ? size : '100%'}
      width={direction === 'vertical' ? size : '100%'}
      bg='borderColor'
      {...rest}
    />
  );
};

export default Divider;
