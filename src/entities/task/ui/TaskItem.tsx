import React, {FC} from 'react';
import {Task} from '@entities/task/model/taskList';
import {StyleSheet, Text, View} from 'react-native';
import {ToggleTask} from 'features/toggle-task-feature/ui';
import {DeleteTask} from 'features/delete-task-feature/ui';
import {RootState, useAppSelector} from 'app/store';

export const TaskItem: FC<{task: Task; index: number}> = ({task, index}) => {
  const filteredTaskList = useAppSelector(
    (state: RootState) => state.task.filteredTasks,
  );

  return (
    <View
      style={[
        styles.card,
        index !== filteredTaskList.length - 1 && styles.cardLine,
      ]}>
      <ToggleTask isCompleted={task.completed} taskId={task.id} />
      <View style={styles.textBlock}>
        <Text style={styles.title}>{task.title}</Text>
        <Text style={[styles.subtitle, task.completed && styles.subtitleDone]}>
          {task.title}
        </Text>
      </View>
      <DeleteTask taskId={task.id} />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 15,
    alignItems: 'center',
  },
  cardLine: {
    borderBottomWidth: 2,
    borderBottomColor: '#EEF8FD',
  },
  textBlock: {
    flex: 1,
  },
  title: {
    fontSize: 17,
    lineHeight: 25.5,
    fontWeight: '500',
    color: '#3B3B3B',
  },
  subtitle: {
    fontSize: 13,
    fontWeight: '400',
    lineHeight: 16.9,
    color: '#3B3B3B',
  },
  subtitleDone: {
    textDecorationLine: 'line-through',
    color: '#6F767E',
  },
});
