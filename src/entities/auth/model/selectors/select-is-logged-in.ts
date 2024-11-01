import { RootState } from '@/app';

export const selectIsLoggedIn = (state: RootState) => state.auth.isLoggedIn;
