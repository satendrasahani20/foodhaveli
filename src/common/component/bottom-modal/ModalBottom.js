import React, { useEffect, useRef, useState } from 'react'
import { View, Animated, KeyboardAvoidingView, Keyboard, ScrollView } from 'react-native';
import { Modal, Portal, Text, useTheme } from 'react-native-paper';
import ModalBottomStyle from './style/ModalBottomStyle';

const ModalBottom = ({ childElement, open, closeModal }) => {
  const theme = useTheme();
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setKeyboardVisible(true);
      }
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setKeyboardVisible(false);
      }
    );

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);
  const conditiinalStyle = () => {
    if (isKeyboardVisible) {
      return { top: 0, height: "100%" }
    } else {
      return { bottom: -10 }
    }
  }
  return (
    <KeyboardAvoidingView
      behavior="padding"
      style={{ flex: 1 }}
      enabled
      keyboardVerticalOffset={600} // You can adjust this offset as needed
    >
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View>
          <Portal >
            <Modal
              visible={open} onDismiss={closeModal} contentContainerStyle={{ ...ModalBottomStyle.modal, ...conditiinalStyle() }}>
              <View style={{ flex: 1, alignItems: "center" }}>
                <View style={{ ...ModalBottomStyle.devider, borderColor: theme.colors.gray, backgroundColor: theme.colors.gray }}>
                </View>
                {childElement}
              </View>
            </Modal>
          </Portal>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  )
}

export default ModalBottom