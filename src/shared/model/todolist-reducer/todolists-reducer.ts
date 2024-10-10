import { FilterValues, TodolistType } from '../../types';

import { v1 } from 'uuid';

type RemoveTodolistActionType = {
  type: 'REMOVE-TODOLIST';
  payload: {
    id: string;
  };
};

type AddTodolistActionType = {
  type: 'ADD-TODOLIST';
  payload: {
    title: string;
  };
};

type ChangeTodolistTitleActionType = {
  type: 'CHANGE-TODOLIST-TITLE';
  payload: {
    id: string;
    title: string;
  };
};

type ChangeTodolistFilterActionType = {
  type: 'CHANGE-TODOLIST-FILTER';
  payload: {
    id: string;
    filter: FilterValues;
  };
};

type ActionsType =
  | RemoveTodolistActionType
  | AddTodolistActionType
  | ChangeTodolistTitleActionType
  | ChangeTodolistFilterActionType;

let todolistID1 = v1();
let todolistID2 = v1();

const initialState: TodolistType[] = [
  {
    id: todolistID1,
    title: 'What to learn',
    filter: 'all',
  },
  { id: todolistID2, title: 'What to buy', filter: 'all' },
];

export const todolistsReducer = (
  state: TodolistType[] = initialState,
  action: ActionsType
) => {
  switch (action.type) {
    case 'REMOVE-TODOLIST': {
      return state.filter((tl) => tl.id !== action.payload.id);
    }
    case 'ADD-TODOLIST': {
      const todolistID = v1();
      const newTodolist: TodolistType = {
        id: todolistID,
        title: action.payload.title,
        filter: 'all',
      };
      return [...state, newTodolist];
    }
    case 'CHANGE-TODOLIST-TITLE': {
      const newTodolistTitle = state.map((tl) =>
        tl.id === action.payload.id
          ? { ...tl, title: action.payload.title }
          : tl
      );
      return newTodolistTitle;
    }
    case 'CHANGE-TODOLIST-FILTER': {
      const newTodolists = state.map((tl) =>
        tl.id === action.payload.id
          ? { ...tl, filter: action.payload.filter }
          : tl
      );
      return newTodolists;
    }

    default:
      throw new Error("I don't understand this action type");
  }
};

export const removeTodolistAC = (
  todolistID: string
): RemoveTodolistActionType => {
  return { type: 'REMOVE-TODOLIST', payload: { id: todolistID } } as const;
};

export const addTodolistAC = (title: string): AddTodolistActionType => {
  return { type: 'ADD-TODOLIST', payload: { title } } as const;
};

export const changedTodolistTitleAC = (
  todolistID: string,
  title: string
): ChangeTodolistTitleActionType => {
  return {
    type: 'CHANGE-TODOLIST-TITLE',
    payload: { id: todolistID, title },
  } as const;
};

export const changedTodolistFilterAC = (
  todolistID: string,
  filter: FilterValues
): ChangeTodolistFilterActionType => {
  return {
    type: 'CHANGE-TODOLIST-FILTER',
    payload: { id: todolistID, filter },
  } as const;
};
