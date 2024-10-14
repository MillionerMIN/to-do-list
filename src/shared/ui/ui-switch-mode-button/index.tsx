import { useDispatch, useSelector } from 'react-redux';

import DarkIcon from '@mui/icons-material/Brightness4';
import LightIcon from '@mui/icons-material/Brightness7';
import { RootState } from '../../redux';
import { UiIconButton } from '../ui-icon-button';
import { changeThemeModeAC } from '../../model';

export function UiSwitchModeButton({ ...props }) {
  // const theme = useTheme();
  // const colorMode = useContext(ColorContext);
  const themeMode = useSelector((state: RootState) => state.app.themeMode);
  const dispatch = useDispatch();
  const changeModeHandler = () => {
    const theme = themeMode === 'light' ? 'dark' : 'light';
    dispatch(changeThemeModeAC(theme));
  };

  return (
    <UiIconButton {...props} onClick={changeModeHandler} color='inherit'>
      {themeMode === 'dark' ? <DarkIcon /> : <LightIcon />}
    </UiIconButton>
  );
}
