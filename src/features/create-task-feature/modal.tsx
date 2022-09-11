import React, {FC, useState} from 'react';
import {StyleSheet, Text, TouchableNativeFeedback, View} from 'react-native';
import {Input} from 'shared/ui/input/Input';
import {ModalWindow} from 'shared/ui/modal/ModalWindow';
import {createTask, Task} from '@entities/task/model/taskList';
import {useAppDispatch, useAppSelector} from 'app/store';

interface CreateTaskModalProps {
  visible: boolean;
  onRequestClose: () => void;
}

export const CreateTaskModal: FC<CreateTaskModalProps> = ({
  visible,
  onRequestClose,
}) => {
  const tasks = useAppSelector(state => state.task.filteredTasks);
  const dispatch = useAppDispatch();
  const [title, setTitle] = useState('');
  const [subtitle, setSubtitle] = useState('');

  const handleSubmit = () => {
    const task: Task = {
      title: title,
      assignment: subtitle,
      completed: false,
      id: ++tasks.length,
    };
    dispatch(createTask(task));
    onRequestClose();
  };

  return (
    <ModalWindow visible={visible} onRequestClose={onRequestClose}>
      <View style={styles.modal}>
        <View style={styles.modalContent}>
          <Text style={[styles.text, styles.title]}>Добавить предмет</Text>
          <Text style={[styles.text, styles.subtitle]}>
            Укажите заголовок и задание
          </Text>
          <Input
            style={styles.input}
            value={title}
            onChangeText={text => setTitle(text)}
            placeholder={'Заголовок'}
          />
          <Input
            style={styles.input}
            value={subtitle}
            onChangeText={text => setSubtitle(text)}
            placeholder={'Задание'}
          />
        </View>
        <View style={styles.buttonContainer}>
          <TouchableNativeFeedback onPress={onRequestClose}>
            <View style={[styles.button, styles.cancelButton]}>
              <Text style={[styles.text, styles.buttonText, styles.cancelText]}>
                Отмена
              </Text>
            </View>
          </TouchableNativeFeedback>
          <TouchableNativeFeedback onPress={handleSubmit}>
            <View style={styles.button}>
              <Text style={[styles.text, styles.buttonText, styles.submitText]}>
                Сохранить
              </Text>
            </View>
          </TouchableNativeFeedback>
        </View>
      </View>
    </ModalWindow>
  );
};

const styles = StyleSheet.create({
  modal: {
    paddingTop: 18,
    backgroundColor: 'rgba(249, 249, 249, 0.94)',
    borderRadius: 14,
  },
  input: {
    marginBottom: 15,
  },
  modalContent: {
    paddingHorizontal: 16,
  },
  buttonContainer: {
    flexDirection: 'row',
    borderTopWidth: 1,
    borderTopColor: '#FFFFFF',
    justifyContent: 'space-between',
  },
  text: {
    textAlign: 'center',
  },
  title: {
    fontSize: 17,
    fontWeight: '500',
    lineHeight: 22,
    color: '#3B3B3B',
  },
  subtitle: {
    fontSize: 13,
    fontWeight: '400',
    lineHeight: 18,
    marginBottom: 16,
  },
  button: {
    paddingHorizontal: 6,
    paddingVertical: 10,
    flex: 1,
  },
  cancelButton: {
    borderRightWidth: 1,
    borderRightColor: '#FFFFFF',
  },
  buttonText: {
    fontSize: 17,
    fontWeight: '500',
    lineHeight: 22,
  },
  cancelText: {
    color: '#C3C3C5',
  },
  submitText: {
    color: '#3784CC',
  },
});
