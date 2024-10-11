import { FilterValuesType, TodolistType } from '../../types';

import { v1 } from 'uuid';

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

export const removeTodolistAC = (todolistID: string) => {
  return { type: 'REMOVE-TODOLIST', payload: { id: todolistID } } as const;
};

export const addTodolistAC = (title: string) => {
  return { type: 'ADD-TODOLIST', payload: { title } } as const;
};

export const changedTodolistTitleAC = (todolistID: string, title: string) => {
  return {
    type: 'CHANGE-TODOLIST-TITLE',
    payload: { id: todolistID, title },
  } as const;
};

export const changedTodolistFilterAC = (
  todolistID: string,
  filter: FilterValuesType
) => {
  return {
    type: 'CHANGE-TODOLIST-FILTER',
    payload: { id: todolistID, filter },
  } as const;
};

type RemoveTodolistActionType = ReturnType<typeof removeTodolistAC>;
type AddTodolistActionType = ReturnType<typeof addTodolistAC>;

type ChangeTodolistTitleActionType = ReturnType<typeof changedTodolistTitleAC>;

type ChangeTodolistFilterActionType = ReturnType<
  typeof changedTodolistFilterAC
>;

type ActionsType =
  | RemoveTodolistActionType
  | AddTodolistActionType
  | ChangeTodolistTitleActionType
  | ChangeTodolistFilterActionType;
