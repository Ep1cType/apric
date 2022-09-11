import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import {QueryConfig} from 'features/filters-task-feature/config';

export interface Task {
  id: number;
  title: string;
  assignment: string;
  completed: boolean;
}

export interface TaskListState {
  tasks: Task[];
  filteredTasks: Task[];
  filter: QueryConfig;
}

const initialState: TaskListState = {
  tasks: [
    {
      id: 1,
      completed: false,
      assignment: 'GHlleqwe',
      title: '11111',
    },
    {
      id: 2,
      completed: true,
      assignment: 'GHlleqwe',
      title: '22222',
    },
    {
      id: 3,
      completed: false,
      assignment: 'GHlleqwe',
      title: '3333',
    },
  ],
  filteredTasks: [],
  filter: {},
};

export const taskListSlice = createSlice({
  name: 'taskList',
  initialState,
  reducers: {
    setTaskList: (state, action: PayloadAction<Task[]>) => {
      state.tasks = action.payload;
    },
    toggleTask: (state, action: PayloadAction<number>) => {
      const task = state.tasks.find(task => task.id === action.payload);
      const filteredTask = state.filteredTasks.find(
        fTask => fTask.id === action.payload,
      );
      if (task) {
        task.completed = !task.completed;
      }
      if (filteredTask) {
        filteredTask.completed = !filteredTask.completed;
      }
    },
    deleteTask: (state, action: PayloadAction<number>) => {
      state.tasks = state.tasks.filter(task => task.id !== action.payload);
      state.filteredTasks = state.filteredTasks.filter(
        task => task.id !== action.payload,
      );
    },
    filterTask: state => {
      state.filteredTasks = state.tasks.filter(
        task =>
          state.filter.completed === undefined ||
          task.completed === state.filter.completed,
      );
    },
    setFilter: (state, action: PayloadAction<QueryConfig>) => {
      state.filter = action.payload;
    },
    createTask: (state, action: PayloadAction<Task>) => {
      state.tasks.push(action.payload);
      if (
        state.filter.completed === false ||
        state.filter.completed === undefined
      ) {
        state.filteredTasks.push(action.payload);
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const {createTask, toggleTask, deleteTask, filterTask, setFilter} =
  taskListSlice.actions;

export default taskListSlice.reducer;
