import {
  UiSwitchModeButton,
  changeThemeModeAC,
  useAppDispatch,
  useAppSelector,
} from '../../shared';

export function SwitchThemeMode() {
  const themeMode = useAppSelector((state) => state.app.themeMode);
  const dispatch = useAppDispatch();
  const changeModeHandler = () => {
    const theme = themeMode === 'light' ? 'dark' : 'light';
    dispatch(changeThemeModeAC(theme));
  };

  return (
    <UiSwitchModeButton themeMode={themeMode} onClick={changeModeHandler} />
  );
}
