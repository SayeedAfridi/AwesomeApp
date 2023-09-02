import { Box, Text, TouchBox } from '@app/components';
import React from 'react';
import { Modal, ModalProps } from 'react-native';

export interface WallpaperModalProps extends ModalProps {
  Wallpaper: any;
}

const WallpaperModal: React.FC<WallpaperModalProps> = ({
  Wallpaper,
  ...props
}) => {
  return (
    <Modal animationType='fade' {...props}>
      <Box flex={1}>
        <TouchBox
          zIndex={9999}
          position='absolute'
          top={70}
          right={20}
          height={38}
          width={38}
          justifyContent='center'
          alignItems='center'
          borderRadius='round'
          bg='overlay'
          onPress={props.onRequestClose}>
          <Text variant='caption'>X</Text>
        </TouchBox>
        <Wallpaper />
      </Box>
    </Modal>
  );
};

export default WallpaperModal;
