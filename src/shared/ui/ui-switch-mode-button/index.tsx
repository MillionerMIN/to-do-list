import DarkIcon from '@mui/icons-material/Brightness4';
import { IconButtonProps } from '@mui/material';
import LightIcon from '@mui/icons-material/Brightness7';
import { UiIconButton } from '../ui-icon-button';

type PropsType = {
  themeMode: string;
} & IconButtonProps;

export function UiSwitchModeButton({ themeMode, ...props }: PropsType) {
  return (
    <UiIconButton {...props} color='inherit'>
      {themeMode === 'dark' ? <DarkIcon /> : <LightIcon />}
    </UiIconButton>
  );
}
