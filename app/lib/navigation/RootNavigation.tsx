import { stackScreenOptions } from '@app/lib/navigation/navigation.options';
import { RootRoutes } from '@app/lib/navigation/navigation.types';
import HomeScreen from '@app/screens/HomeScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

const RootNavigator = createNativeStackNavigator<RootRoutes>();

const RootNavigation: React.FC = () => {
  return (
    <RootNavigator.Navigator screenOptions={stackScreenOptions}>
      <RootNavigator.Screen name='home' component={HomeScreen} />
    </RootNavigator.Navigator>
  );
};

export default RootNavigation;
