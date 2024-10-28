import { RequestStateType } from '@/shared';
export const setAppStatusAC = (status: RequestStateType) => {
  return { type: 'SET-STATUS', payload: { status } } as const;
};

export type SetAppStatusActionType = ReturnType<typeof setAppStatusAC>;
