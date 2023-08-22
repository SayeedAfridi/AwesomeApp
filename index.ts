/**
 * @format
 */

import 'react-native-gesture-handler';
import { AppRegistry } from 'react-native';
import AppProvider from '@app/AppProvider';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => AppProvider);
