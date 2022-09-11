import React, {FC} from 'react';
import {StyleSheet, Text, TouchableNativeFeedback, View} from 'react-native';
import {Filter, filtersList} from 'features/filters-task-feature/config';

interface ModalButtonProps {
  filter: Filter;
  index: number;
  onPress: (id: number) => void;
  currentFilter: Filter;
}

export const ModalButton: FC<ModalButtonProps> = ({
  filter,
  index,
  onPress,
  currentFilter,
}) => {
  return (
    <TouchableNativeFeedback key={filter.id} onPress={() => onPress(filter.id)}>
      <View
        style={[
          styles.modalButton,
          index !== filtersList.length - 1 && styles.marginBottom,
        ]}>
        <Text
          style={[
            styles.text,
            currentFilter.id === filter.id && styles.selected,
          ]}>
          {filter.title}
        </Text>
      </View>
    </TouchableNativeFeedback>
  );
};

const styles = StyleSheet.create({
  modalButton: {
    paddingVertical: 19,
    paddingHorizontal: 16,
    backgroundColor: 'rgba(249, 249, 249, 0.94)',
    width: 360,
  },
  marginBottom: {
    borderBottomWidth: 2,
    borderBottomColor: '#FFFFFF',
  },
  text: {
    fontSize: 16,
    lineHeight: 18,
    color: '#737A82',
    textAlign: 'center',
    fontWeight: '500',
  },
  selected: {
    color: '#3785CC',
  },
});
