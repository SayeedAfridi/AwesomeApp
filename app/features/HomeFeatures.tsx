import { Box, Container, Text } from '@app/components';
import { APP_TITLE } from '@app/constants/string.constants';
import { RootNavigationProps } from '@app/lib/navigation/navigation.types';
import React from 'react';

export interface HomeFeaturesProps extends RootNavigationProps<'home'> {}

const HomeFeatures: React.FC<HomeFeaturesProps> = ({}) => {
  return (
    <Container safeTop headerProps={{ title: APP_TITLE }} headerShown={true}>
      <Box flex={1} justifyContent='center' alignItems='center'>
        <Text variant='heading1'>Home screen</Text>
      </Box>
    </Container>
  );
};

export default HomeFeatures;
