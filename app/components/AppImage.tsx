import React from 'react';
import { Image, ImageProps } from 'react-native';

export interface AppImageProps extends ImageProps {}

const AppImage: React.FC<AppImageProps> = ({ ...props }) => {
  return <Image {...props} />;
};

export default AppImage;
