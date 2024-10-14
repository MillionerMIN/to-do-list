import { ThemeModeType } from '../../types';

type InitialStateType = typeof initialState;

const initialState = {
  themeMode: 'light' as ThemeModeType,
};

export const appReducer = (
  state: InitialStateType = initialState,
  action: ActionsType
) => {
  switch (action.type) {
    case 'CHANGE-THEME-MODE': {
      return { ...state, themeMode: action.payload.themeMode };
    }
    default:
      return state;
  }
};

export const changeThemeModeAC = (themeMode: ThemeModeType) => {
  return { type: 'CHANGE-THEME-MODE', payload: { themeMode } } as const;
};

type ChangeThemeModeActionType = ReturnType<typeof changeThemeModeAC>;

type ActionsType = ChangeThemeModeActionType;
