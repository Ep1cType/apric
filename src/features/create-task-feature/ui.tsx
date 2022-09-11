import React, {useState} from 'react';
import {StyleSheet, Text, TouchableNativeFeedback, View} from 'react-native';
import {CreateTaskModal} from 'features/create-task-feature/modal';

export const CreateTask = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleToggleModal = (bool: boolean) => {
    setIsModalOpen(bool);
  };

  return (
    <View style={styles.container}>
      <TouchableNativeFeedback onPress={() => handleToggleModal(true)}>
        <View style={styles.button}>
          <Text style={styles.text}>Добавить</Text>
        </View>
      </TouchableNativeFeedback>
      <CreateTaskModal
        visible={isModalOpen}
        onRequestClose={() => handleToggleModal(false)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
  },
  button: {
    paddingVertical: 15,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    backgroundColor: '#3785CC',
  },
  text: {
    fontSize: 16,
    lineHeight: 24,
    color: '#FFFFFF',
  },
});
