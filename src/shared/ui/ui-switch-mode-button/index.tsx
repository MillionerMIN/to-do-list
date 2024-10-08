import { ColorContext } from '../../lib';
import DarkIcon from '@mui/icons-material/Brightness4';
import LightIcon from '@mui/icons-material/Brightness7';
import { UiIconButton } from '../ui-icon-button';
import { useContext } from 'react';
import { useTheme } from '@mui/material';
export function UiSwitchModeButton({ ...props }) {
  const theme = useTheme();
  const colorMode = useContext(ColorContext);

  return (
    <UiIconButton
      {...props}
      onClick={colorMode.toggleColorMode}
      color='inherit'
    >
      {theme.palette.mode === 'dark' ? <DarkIcon /> : <LightIcon />}
    </UiIconButton>
  );
}
