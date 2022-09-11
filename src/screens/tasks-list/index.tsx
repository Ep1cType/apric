import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {RootState, useAppSelector} from 'app/store';
import {FiltersTask} from 'features/filters-task-feature/ui';
import {TaskItem} from '@entities/task/ui/TaskItem';
import {CreateTask} from 'features/create-task-feature/ui';

export const TasksListPage = () => {
  const filteredTaskList = useAppSelector(
    (state: RootState) => state.task.filteredTasks,
  );

  return (
    <>
      <FiltersTask />
      <ScrollView style={styles.list}>
        {filteredTaskList.map((task, index) => {
          return <TaskItem key={task.id} task={task} index={index} />;
        })}
      </ScrollView>
      <CreateTask />
    </>
  );
};

const styles = StyleSheet.create({
  list: {
    paddingHorizontal: 16,
    marginBottom: 36,
  },
});
