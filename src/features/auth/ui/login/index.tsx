import { AuthForm, AuthSchema, Path, useAppDispatch, useAppSelector, useGetTheme } from '@/shared';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { loginTC, selectIsLoggedIn } from '@/entities';

import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import FormLabel from '@mui/material/FormLabel';
import Grid from '@mui/material/Grid';
import { Navigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import { zodResolver } from '@hookform/resolvers/zod';

export function Login() {
  const theme = useGetTheme();
  const dispatch = useAppDispatch();
  const isLoggedIn = useAppSelector(selectIsLoggedIn);

  console.log('#####IsLoggedIn', isLoggedIn);
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm<AuthForm>({
    resolver: zodResolver(AuthSchema),
    defaultValues: { rememberMe: false, email: '', password: '' },
  });

  const onSubmit: SubmitHandler<AuthForm> = (data) => {
    dispatch(loginTC(data));
    reset();
  };

  if (isLoggedIn) {
    return <Navigate to={'/'} />;
  }

  return (
    <Grid container justifyContent={'center'}>
      <Grid item justifyContent={'center'}>
        <FormControl>
          <FormLabel>
            <p>
              To login get registered
              <a
                style={{ color: theme.palette.primary.main, marginLeft: '5px' }}
                href={'https://social-network.samuraijs.com/'}
                target={'_blank'}
                rel='noreferrer'
              >
                here
              </a>
            </p>
            <p>or use common test account credentials:</p>
            <p>
              <b>Email:</b> free@samuraijs.com
            </p>
            <p>
              <b>Password:</b> free
            </p>
          </FormLabel>
          <form onSubmit={handleSubmit(onSubmit)}>
            <FormGroup>
              <TextField
                label='Email'
                margin='normal'
                {...register('email')}
                error={!!errors.email}
                helperText={errors.email?.message}
              />
              <TextField
                type='password'
                label='Password'
                margin='normal'
                {...register('password')}
                error={!!errors.password}
                helperText={errors.password?.message}
              />
              <FormControlLabel
                label={'Remember me'}
                control={
                  <Controller
                    name={'rememberMe'}
                    control={control}
                    render={({ field: { value, ...field } }) => <Checkbox {...field} checked={value} />}
                  />
                }
              />

              <Button type={'submit'} variant={'contained'} color={'primary'}>
                Login
              </Button>
            </FormGroup>
          </form>
        </FormControl>
      </Grid>
    </Grid>
  );
}
