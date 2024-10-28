import type { RequestState, ThemeModeType } from '../../../types';

import { appReducer } from '../app-reducer';
import { changeThemeModeAC } from '../actions';

let startState = {
  themeMode: 'light' as ThemeModeType,
  status: 'idle' as RequestState,
  error: null as string | null,
};

beforeEach(() => {
  startState = {
    themeMode: 'light' as ThemeModeType,
    status: 'idle' as RequestState,
    error: null as string | null,
  };
});

test('correct theme mode should be change', () => {
  const action = changeThemeModeAC('dark');
  const endState = appReducer(startState, action);

  expect(endState?.themeMode).toEqual('dark');
});
