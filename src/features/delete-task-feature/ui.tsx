import React, {FC} from 'react';
import {StyleSheet, TouchableNativeFeedback, View} from 'react-native';
import {useAppDispatch} from 'app/store';
import {deleteTask} from '@entities/task/model/taskList';
import {TrashIcon} from 'shared/assets/icons/TrashIcon';

interface ToggleTaskProps {
  taskId: number;
}

export const DeleteTask: FC<ToggleTaskProps> = ({taskId}) => {
  const dispatch = useAppDispatch();

  const handleDeleteTask = () => {
    dispatch(deleteTask(taskId));
  };

  return (
    <TouchableNativeFeedback onPress={handleDeleteTask}>
      <View style={styles.container}>
        <TrashIcon />
      </View>
    </TouchableNativeFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 40,
    height: 40,
    borderRadius: 8,
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
