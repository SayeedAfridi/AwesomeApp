import App from '@app/App';
import theme from '@app/lib/theme';
import { ThemeProvider } from '@shopify/restyle';
import React from 'react';
import { StatusBar } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const AppProvider: React.FC = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ThemeProvider theme={theme}>
        <SafeAreaProvider>
          <StatusBar barStyle='light-content' translucent />
          <App />
        </SafeAreaProvider>
      </ThemeProvider>
    </GestureHandlerRootView>
  );
};

export default AppProvider;
