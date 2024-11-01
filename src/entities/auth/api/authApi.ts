import { LogInResponse, LogOutResponse, MeResponse, instanceApi } from '@/shared';

import { LoginArgs } from '../types';

export const authApi = {
  me() {
    return instanceApi.get<MeResponse>('/auth/me');
  },
  logIn(payload: LoginArgs) {
    return instanceApi.post<LogInResponse>('/auth/login', payload);
  },
  logOut() {
    return instanceApi.delete<LogOutResponse>('/auth/login');
  },
};
