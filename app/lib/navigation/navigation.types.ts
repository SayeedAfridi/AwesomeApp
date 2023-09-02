import { RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export interface RootNavigationProps<RouteName extends keyof RootRoutes> {
  navigation: NativeStackNavigationProp<RootRoutes, RouteName>;
  route: RouteProp<RootRoutes, RouteName>;
}

export type RootRoutes = {
  home: undefined;
};
