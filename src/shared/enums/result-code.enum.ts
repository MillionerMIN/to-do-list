import { z } from 'zod';

export enum ResultCode {
  Success = 0,
  Error = 1,
  Captcha = 10,
}

export const ResultCodeEnum = z.nativeEnum(ResultCode);
export type ResultCodeType = z.infer<typeof ResultCodeEnum>;
