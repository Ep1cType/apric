import React, {FC, ReactNode} from 'react';
import {
  Modal,
  StyleProp,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
  ViewStyle,
} from 'react-native';

interface ModalWindowProps {
  children: ReactNode;
  visible: boolean;
  onRequestClose: () => void;
  sStyle?: StyleProp<ViewStyle>;
}

export const ModalWindow: FC<ModalWindowProps> = ({
  children,
  onRequestClose,
  visible,
  sStyle,
}) => {
  return (
    <Modal
      visible={visible}
      transparent
      onRequestClose={onRequestClose}
      animationType={'fade'}>
      <TouchableWithoutFeedback onPress={onRequestClose}>
        <View style={styles.modalOverlay} />
      </TouchableWithoutFeedback>
      <View style={[styles.modalContent, sStyle]}>{children}</View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    // overflow: "hidden",
  },
});
