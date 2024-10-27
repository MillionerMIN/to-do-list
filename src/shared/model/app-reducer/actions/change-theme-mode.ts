import { ThemeModeType } from '@/shared/types';

export const changeThemeModeAC = (themeMode: ThemeModeType) => {
  return { type: 'CHANGE-THEME-MODE', payload: { themeMode } } as const;
};

export type ChangeThemeModeActionType = ReturnType<typeof changeThemeModeAC>;
