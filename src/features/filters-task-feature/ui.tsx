import React, {FC, useEffect, useState} from 'react';
import {StyleSheet, Text, TouchableNativeFeedback, View} from 'react-native';
import {RootState, useAppDispatch, useAppSelector} from 'app/store';
import {filterTask, setFilter} from '@entities/task/model/taskList';
import {
  DEFAULT_FILTER,
  filtersList,
  getFilterById,
} from 'features/filters-task-feature/config';
import {ModalButton} from 'shared/ui/modal-button/ModalButton';
import {ModalWindow} from 'shared/ui/modal/ModalWindow';

export const FiltersTask: FC = () => {
  const cFilter = useAppSelector((state: RootState) => state.task.filter);
  const dispatch = useAppDispatch();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentFilter, setCurrentFilter] = useState(
    getFilterById(DEFAULT_FILTER),
  );

  useEffect(() => {
    dispatch(filterTask());
  }, [cFilter]);

  const handleFilter = (id: number) => {
    dispatch(setFilter(getFilterById(id).config));
    setCurrentFilter(getFilterById(id));
    setIsModalOpen(false);
  };

  const handleToggleModal = (bool: boolean) => {
    setIsModalOpen(bool);
  };

  return (
    <View style={styles.container}>
      <TouchableNativeFeedback onPress={() => handleToggleModal(true)}>
        <View style={styles.button}>
          <Text style={styles.text}>{currentFilter.title}</Text>
        </View>
      </TouchableNativeFeedback>
      <ModalWindow
        visible={isModalOpen}
        onRequestClose={() => handleToggleModal(false)}>
        <View style={styles.modal}>
          {filtersList.map((filter, index) => (
            <ModalButton
              key={filter.id}
              filter={filter}
              index={index}
              onPress={handleFilter}
              currentFilter={currentFilter}
            />
          ))}
        </View>
      </ModalWindow>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    borderBottomColor: '#EEEEEF',
    borderBottomWidth: 2,
  },
  button: {
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: '#3785CC',
    paddingVertical: 9,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginBottom: 43,
  },
  text: {
    color: '#3785CC',
    fontSize: 14,
    fontWeight: '500',
  },
  modal: {
    backgroundColor: 'rgba(249, 249, 249, 0.94)',
    overflow: 'hidden',
    borderRadius: 14,
  },
});
