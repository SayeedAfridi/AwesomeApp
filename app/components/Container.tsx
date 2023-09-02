import React, { PropsWithChildren } from 'react';
import Box from '@app/components/box/Box';
import { Theme } from '@app/lib/theme';
import {
  SafeAreaView,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import Visibility from '@app/components/Visibility';
import Header, { HeaderProps } from '@app/components/headers/Header';
import Loader from '@app/components/Loader';

export interface ContainerProps extends PropsWithChildren {
  background?: keyof Theme['colors'];
  safeArea?: boolean;
  safeTop?: boolean;
  headerShown?: boolean;
  headerProps?: HeaderProps;
  showLoader?: boolean;
}

const Container: React.FC<ContainerProps> = ({
  children,
  background = 'background',
  safeArea = false,
  safeTop = false,
  headerShown = false,
  headerProps,
  showLoader,
}) => {
  const insets = useSafeAreaInsets();
  const renderChildren = () => {
    if (!children) {
      return null;
    }

    if (safeTop && !headerShown) {
      return (
        <Box flex={1} style={{ paddingTop: insets.top }}>
          <Visibility box={false} on={headerShown}>
            <Header {...headerProps!} />
          </Visibility>
          {children}
        </Box>
      );
    }
    if (safeArea) {
      return (
        <SafeAreaView style={{ flex: 1 }}>
          <Visibility box={false} on={headerShown}>
            <Header {...headerProps!} />
          </Visibility>
          {children}
        </SafeAreaView>
      );
    }
    return children;
  };

  return (
    <Box flex={1} backgroundColor={background}>
      {showLoader ? <Loader /> : null}
      <Visibility
        box
        on={safeTop && headerShown}
        height={insets.top}
        backgroundColor={background}
      />
      <Visibility box={false} on={safeTop && headerShown}>
        <Header {...headerProps!} />
      </Visibility>
      {renderChildren()}
    </Box>
  );
};

export default Container;
