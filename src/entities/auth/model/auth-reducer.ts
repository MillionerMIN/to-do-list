import { SetIsInitializedType, SetIsLoggedInType } from './actions';

import { InitialStateType } from '../types';

const initialState: InitialStateType = {
  isLoggedIn: false,
  isInitialized: false,
};

export const authReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
  switch (action.type) {
    case 'SET-IS-INITIALIZED': {
      return { ...state, isInitialized: action.payload.isInitialized };
    }
    case 'SET-IS-LOGGED-IN': {
      return { ...state, isLoggedIn: action.payload.isLoggedIn };
    }
    default:
      return state;
  }
};

export type ActionType = SetIsLoggedInType | SetIsInitializedType;
