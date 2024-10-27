export const setAppErrorAC = (error: string | null) => {
  return { type: 'SET-ERROR', payload: { error } } as const;
};

export type SetAppErrorActionType = ReturnType<typeof setAppErrorAC>;
