import React, {FC} from 'react';
import {
  StyleProp,
  StyleSheet,
  TextInput,
  TextInputProps,
  ViewStyle,
} from 'react-native';

interface InputProps extends TextInputProps {
  sStyle?: StyleProp<ViewStyle>;
}

export const Input: FC<InputProps> = ({style, ...props}) => {
  return <TextInput style={[styles.input, style]} {...props} />;
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#FFFFFF',
    borderRadius: 7,
    paddingHorizontal: 6,
    paddingVertical: 7,
    fontSize: 13,
    lineHeight: 18,
    fontWeight: '400',
    color: '#3B3B3B',
    maxHeight: 32,
    width: 238,
  },
});
