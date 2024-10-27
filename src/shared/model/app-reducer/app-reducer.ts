import { ChangeThemeModeActionType, SetAppStatusActionType } from './actions';
import { RequestState, ThemeModeType } from '../../types';

type InitialStateType = typeof initialState;

const initialState = {
  themeMode: 'light' as ThemeModeType,
  status: 'idle' as RequestState,
};

export const appReducer = (state: InitialStateType = initialState, action: ActionsType) => {
  switch (action.type) {
    case 'CHANGE-THEME-MODE': {
      return { ...state, themeMode: action.payload.themeMode };
    }
    case 'SET-STATUS': {
      return { ...state, status: action.payload.status };
    }
    default:
      return state;
  }
};

type ActionsType = ChangeThemeModeActionType | SetAppStatusActionType;
