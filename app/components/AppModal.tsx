import React from 'react';
import { Modal, ModalProps, StyleSheet } from 'react-native';
import PressBox from '@app/components/box/PressBox';
import Box from '@app/components/box/Box';

export interface AppModalProps extends ModalProps {
  children?: React.ReactNode;
}

const AppModal: React.FC<AppModalProps> = ({
  children,
  animationType = 'fade',
  ...props
}) => {
  return (
    <Modal
      animationType={animationType}
      transparent
      hardwareAccelerated={true}
      {...props}>
      <Box
        justifyContent='center'
        alignItems='center'
        flex={1}
        padding='l'
        style={{ backgroundColor: 'rgba(0, 0, 0, .5)' }}>
        <PressBox
          style={[StyleSheet.absoluteFill, { zIndex: -10 }]}
          onPress={props.onRequestClose}
        />
        {children}
      </Box>
    </Modal>
  );
};

export default AppModal;
