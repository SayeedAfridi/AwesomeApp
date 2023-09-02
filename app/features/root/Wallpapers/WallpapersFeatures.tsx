import { Box, Container, Text, TouchBox } from '@app/components';
import { APP_TITLE } from '@app/constants/string.constants';
import HalfCircleWallpaper from '@app/features/root/Wallpapers/HalfCircleWallpaper';
import StripeWallpaper from '@app/features/root/Wallpapers/StripeWallpaper';
import WallpaperModal from '@app/features/root/Wallpapers/WallpaperModal';
import { RootNavigationProps } from '@app/lib/navigation/navigation.types';
import React, { useCallback, useState } from 'react';

export interface WallpaperFeaturesProps
  extends RootNavigationProps<'wallpapers'> {}

const WallpapersFeatures: React.FC<WallpaperFeaturesProps> = ({}) => {
  const [visible, setVisible] = useState<boolean>(false);
  const [CurrentPaper, setCurrentPaper] = useState<any>({
    wall: StripeWallpaper,
  });

  const showWallPaper = useCallback((comp: any) => {
    setCurrentPaper({ wall: comp });
    setVisible(true);
  }, []);

  return (
    <Container safeTop headerProps={{ title: APP_TITLE }} headerShown={true}>
      <Box flex={1} px='m' py='l'>
        <TouchBox
          mb='m'
          p='m'
          bg='oceanBlue'
          borderRadius='m'
          onPress={() => showWallPaper(StripeWallpaper)}>
          <Text>Stripe</Text>
        </TouchBox>
        <TouchBox
          mb='m'
          p='m'
          bg='oceanBlue'
          borderRadius='m'
          onPress={() => showWallPaper(HalfCircleWallpaper)}>
          <Text>Half circle</Text>
        </TouchBox>
      </Box>
      <WallpaperModal
        onRequestClose={() => setVisible(false)}
        visible={visible}
        Wallpaper={CurrentPaper.wall}
      />
    </Container>
  );
};

export default WallpapersFeatures;
