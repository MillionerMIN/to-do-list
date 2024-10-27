import { RequestState } from '@/shared/types';

export const setAppStatusAC = (status: RequestState) => {
  return { type: 'SET-STATUS', payload: { status } } as const;
};

export type SetAppStatusActionType = ReturnType<typeof setAppStatusAC>;
