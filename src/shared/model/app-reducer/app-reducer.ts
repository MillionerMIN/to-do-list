import { ChangeThemeModeActionType, SetAppErrorActionType, SetAppStatusActionType } from './actions';

import { RequestStatusType } from '@/shared/enums';
import { ThemeModeType } from '../../types';

type InitialStateType = typeof initialState;

const initialState = {
  themeMode: 'light' as ThemeModeType,
  status: 'idle' as RequestStatusType,
  error: null as string | null,
};

export const appReducer = (state: InitialStateType = initialState, action: ActionsType) => {
  switch (action.type) {
    case 'CHANGE-THEME-MODE': {
      return { ...state, themeMode: action.payload.themeMode };
    }
    case 'SET-STATUS': {
      return { ...state, status: action.payload.status };
    }
    case 'SET-ERROR': {
      return { ...state, error: action.payload.error };
    }
    default:
      return state;
  }
};

type ActionsType = ChangeThemeModeActionType | SetAppStatusActionType | SetAppErrorActionType;
