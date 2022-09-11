export type QueryConfig = {
  completed?: boolean;
};

export type Filter = {
  id: number;
  title: string;
  config: QueryConfig;
};

export const filters: Record<number, Filter> = {
  1: {
    id: 1,
    title: 'Показывать все задания',
    config: {},
  },
  2: {
    id: 2,
    title: 'Выполненные',
    config: {
      completed: true,
    },
  },
  3: {
    id: 3,
    title: 'Не выполненные',
    config: {
      completed: false,
    },
  },
};

export const DEFAULT_FILTER = 1;

export const filtersList = Object.values(filters);

export const getFilterById = (id: number) => filters[id];
