import { combineReducers, legacy_createStore } from 'redux';
import { tasksReducer, todolistsReducer } from '../../entities';

import { appReducer } from '../../shared';

const rootReducer = combineReducers({
  app: appReducer,
  todolists: todolistsReducer,
  tasks: tasksReducer,
});

export const store = legacy_createStore(rootReducer);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
