import { RootState } from '@/app';

export const selectThemeMode = (state: RootState) => state.app.themeMode;

export const selectAppStatus = (state: RootState) => state.app.status;
