import { RootState } from '../../../app';

export const selectThemeMode = (state: RootState) => state.app.themeMode;
