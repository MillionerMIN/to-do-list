import { z } from 'zod';

export enum RequestStatus {
  Idle = 'idle',
  Loading = 'loading',
  Success = 'success',
  Failed = 'failed',
  Error = 'error',
}

export const RequestStatusEnum = z.nativeEnum(RequestStatus);
export type RequestStatusType = z.infer<typeof RequestStatusEnum>;
