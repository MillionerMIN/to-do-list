import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import Toolbar from '@mui/material/Toolbar';
import { UiButton } from '../ui-button';
import { UiIconButton } from '../ui-icon-button';
import { UiLogo } from '../ui-logo';
import { UiSwitchModeButton } from '../ui-switch-mode-button';

export function UiAppBar() {
  return (
    <Box>
      <AppBar position='static' className={'mb-8'}>
        <Toolbar className={'flex justify-between'}>
          <div className='flex gap-4'>
            <UiLogo />
            <UiIconButton
              children={<MenuOpenIcon className='fill-white w-7 h-7' />}
            />
          </div>
          <div className='flex gap-4'>
            <UiButton variant='outlined' color='inherit' children='Log in' />
            <UiButton variant='outlined' color='inherit' children='Log out' />
            <UiButton variant='outlined' color='inherit' children='Faq' />
            <UiSwitchModeButton />
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
