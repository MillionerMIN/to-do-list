import { combineReducers, legacy_createStore } from 'redux';
import { tasksReducer, todolistsReducer } from '../model';

const rootReducer = combineReducers({
  todolists: todolistsReducer,
  tasks: tasksReducer,
});

export const store = legacy_createStore(rootReducer);

export type RootState = ReturnType<typeof store.getState>;
