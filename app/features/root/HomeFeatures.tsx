import { Box, Container, Text, TouchBox } from '@app/components';
import { APP_TITLE } from '@app/constants/string.constants';
import { RootNavigationProps } from '@app/lib/navigation/navigation.types';
import React from 'react';

export interface HomeFeaturesProps extends RootNavigationProps<'home'> {}

const HomeFeatures: React.FC<HomeFeaturesProps> = ({ navigation }) => {
  return (
    <Container safeTop headerProps={{ title: APP_TITLE }} headerShown={true}>
      <Box flex={1} px='m' py='l'>
        <TouchBox
          onPress={() => navigation.navigate('wallpapers')}
          p='m'
          bg='oceanBlue'
          borderRadius='m'>
          <Text>Wallpapers</Text>
        </TouchBox>
      </Box>
    </Container>
  );
};

export default HomeFeatures;
