import React, {FC} from 'react';
import {useAppDispatch} from 'app/store';
import {toggleTask} from '@entities/task/model/taskList';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import {UncheckedIcon} from 'shared/assets/icons/UncheckedIcon';
import {CheckedIcon} from 'shared/assets/icons/CheckedIcon';

interface ToggleTaskProps {
  isCompleted: boolean;
  taskId: number;
}

export const ToggleTask: FC<ToggleTaskProps> = ({isCompleted, taskId}) => {
  const dispatch = useAppDispatch();

  const handleToggleTask = () => {
    dispatch(toggleTask(taskId));
  };

  return (
    <BouncyCheckbox
      onPress={handleToggleTask}
      isChecked={isCompleted}
      size={30}
      fillColor={'#292D32'}
      unfillColor={'#FFFFFF'}
      innerIconStyle={{
        borderRadius: 10,
        borderWidth: 1.5,
      }}
      iconStyle={{
        borderRadius: 10,
        backgroundColor: '#FFFFFF',
      }}
      iconComponent={isCompleted ? <CheckedIcon /> : <UncheckedIcon />}
    />
  );
};
