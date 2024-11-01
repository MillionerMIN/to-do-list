import { ThunkDispatch, thunk } from 'redux-thunk';
import { UnknownAction, applyMiddleware, combineReducers, legacy_createStore } from 'redux';
import { authReducer, tasksReducer, todolistsReducer } from '@/entities';

import { appReducer } from '@/shared';

const rootReducer = combineReducers({
  app: appReducer,
  auth: authReducer,
  todolists: todolistsReducer,
  tasks: tasksReducer,
});

export const store = legacy_createStore(rootReducer, {}, applyMiddleware(thunk));

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = ThunkDispatch<RootState, unknown, UnknownAction>;
