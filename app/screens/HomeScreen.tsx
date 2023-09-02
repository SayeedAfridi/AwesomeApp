import HomeFeatures from '@app/features/HomeFeatures';
import { RootNavigationProps } from '@app/lib/navigation/navigation.types';
import React from 'react';

const HomeScreen: React.FC<RootNavigationProps<'home'>> = props => {
  return <HomeFeatures {...props} />;
};

export default HomeScreen;
