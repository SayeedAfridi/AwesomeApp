import React from 'react';
import WallpapersFeatures from '@app/features/root/Wallpapers/WallpapersFeatures';
import { RootNavigationProps } from '@app/lib/navigation/navigation.types';

const WallpapersScreen: React.FC<RootNavigationProps<'wallpapers'>> = props => {
  return <WallpapersFeatures {...props} />;
};

export default WallpapersScreen;
