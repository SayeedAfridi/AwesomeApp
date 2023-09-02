import { DrawerNavigationOptions } from '@react-navigation/drawer';
import { NativeStackNavigationOptions } from '@react-navigation/native-stack';
import { screenWidth } from '../utils';

export const stackScreenOptions: NativeStackNavigationOptions = {
  headerShown: false,
  animation: 'slide_from_right',
};

export const drawerOptions: DrawerNavigationOptions = {
  headerShown: false,
  lazy: true,
  unmountOnBlur: true,
  drawerStyle: {
    width: screenWidth * 0.8,
  },
};
