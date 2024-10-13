import { FilterValuesType, TodolistType } from '../../types';

import { v1 } from 'uuid';

let todolistId1 = v1();
let todolistId2 = v1();

const initialState: TodolistType[] = [
  {
    id: todolistId1,
    title: 'What to learn',
    filter: 'all',
  },
  { id: todolistId2, title: 'What to buy', filter: 'all' },
];

export const todolistsReducer = (
  state: TodolistType[] = initialState,
  action: ActionsType
) => {
  switch (action.type) {
    case 'REMOVE-TODOLIST': {
      return state.filter((tl) => tl.id !== action.payload.todolistId);
    }
    case 'ADD-TODOLIST': {
      const newTodolist: TodolistType = {
        id: action.payload.todolistId,
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
        tl.id === action.payload.todolistId
          ? { ...tl, filter: action.payload.filter }
          : tl
      );
      return newTodolists;
    }

    default:
      throw new Error("I don't understand this action type");
  }
};

export const removeTodolistAC = (todolistId: string) => {
  return { type: 'REMOVE-TODOLIST', payload: { todolistId } } as const;
};

export const addTodolistAC = (title: string) => {
  return {
    type: 'ADD-TODOLIST',
    payload: { title, todolistId: v1() },
  } as const;
};

export const changedTodolistTitleAC = (todolistId: string, title: string) => {
  return {
    type: 'CHANGE-TODOLIST-TITLE',
    payload: { id: todolistId, title },
  } as const;
};

export const changedTodolistFilterAC = (
  todolistId: string,
  filter: FilterValuesType
) => {
  return {
    type: 'CHANGE-TODOLIST-FILTER',
    payload: { todolistId, filter },
  } as const;
};

export type RemoveTodolistActionType = ReturnType<typeof removeTodolistAC>;
export type AddTodolistActionType = ReturnType<typeof addTodolistAC>;

type ChangeTodolistTitleActionType = ReturnType<typeof changedTodolistTitleAC>;

type ChangeTodolistFilterActionType = ReturnType<
  typeof changedTodolistFilterAC
>;

type ActionsType =
  | RemoveTodolistActionType
  | AddTodolistActionType
  | ChangeTodolistTitleActionType
  | ChangeTodolistFilterActionType;
