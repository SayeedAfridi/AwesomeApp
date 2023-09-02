import React from 'react';

export interface BinaryVisibilityProps {
  condition?: boolean;
  True: React.ReactElement;
  False: React.ReactElement;
}

const BinaryVisibility: React.FC<BinaryVisibilityProps> = ({
  condition,
  True,
  False,
}) => {
  return condition ? True : False;
};

export default BinaryVisibility;
