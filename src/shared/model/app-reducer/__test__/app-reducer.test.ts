import { appReducer, changeThemeModeAC } from '../app-reducer';

import type { ThemeModeType } from '../../../types';

let startState = {
  themeMode: 'light' as ThemeModeType,
};

beforeEach(() => {
  startState = {
    themeMode: 'light' as ThemeModeType,
  };
});

test('correct theme mode should be changed', () => {
  const action = changeThemeModeAC('dark');
  const endState = appReducer(startState, action);

  expect(endState?.themeMode).toEqual('dark');
});
