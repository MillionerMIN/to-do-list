export const setIsLoggedInAC = (isLoggedIn: boolean) => {
  return { type: 'SET-IS-LOGGED-IN', payload: { isLoggedIn } } as const;
};

export type SetIsLoggedInType = ReturnType<typeof setIsLoggedInAC>;
