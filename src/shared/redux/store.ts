import { appReducer, tasksReducer, todolistsReducer } from '../model';
import { combineReducers, legacy_createStore } from 'redux';

const rootReducer = combineReducers({
  app: appReducer,
  todolists: todolistsReducer,
  tasks: tasksReducer,
});

export const store = legacy_createStore(rootReducer);

export type RootState = ReturnType<typeof store.getState>;
