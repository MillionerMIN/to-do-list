import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import MuiAppBar from '@mui/material/AppBar';
import { SwitchThemeMode } from '../../features';
import Toolbar from '@mui/material/Toolbar';
import { UiButton } from '../../shared/ui/ui-button';
import { UiIconButton } from '../../shared/ui/ui-icon-button';
import { UiLogo } from '../../shared';

export function UiAppBar() {
  return (
    <MuiAppBar position='static' className={'mb-8'}>
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
          <SwitchThemeMode />
        </div>
      </Toolbar>
    </MuiAppBar>
  );
}
