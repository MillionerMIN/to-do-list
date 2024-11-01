import { RootState } from '@/app';

export const selectIsInitialized = (state: RootState) => state.auth.isInitialized;
