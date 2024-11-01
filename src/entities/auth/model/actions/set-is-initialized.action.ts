export const setIsInitializedAC = (isInitialized: boolean) => {
  return { type: 'SET-IS-INITIALIZED', payload: { isInitialized } } as const;
};

export type SetIsInitializedType = ReturnType<typeof setIsInitializedAC>;
