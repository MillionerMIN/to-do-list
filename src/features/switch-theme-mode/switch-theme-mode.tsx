import {
  UiSwitchModeButton,
  changeThemeModeAC,
  selectThemeMode,
  useAppDispatch,
  useAppSelector,
} from '../../shared';

export function SwitchThemeMode() {
  const themeMode = useAppSelector(selectThemeMode);
  const dispatch = useAppDispatch();
  const changeModeHandler = () => {
    const theme = themeMode === 'light' ? 'dark' : 'light';
    dispatch(changeThemeModeAC(theme));
  };

  return (
    <UiSwitchModeButton themeMode={themeMode} onClick={changeModeHandler} />
  );
}
