export enum ResultCode {
  Success = 0,
  Error = 1,
  Captcha = 10,
}

export type ResultCodeType = (typeof ResultCode)[keyof typeof ResultCode];
