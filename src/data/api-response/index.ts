import { AxiosResponse } from "axios";

export type ResponseError = {
  code: string
  number: number
}

const defaultSuccessHandler = <Out>(data: unknown): Out => data as Out

const defaultThrow = (data: string) => {
  throw new Error(data)
}

const isOk = (statusCode: number) => statusCode >= 200 && statusCode < 300

export const handleResponse = <TOut, In = any>(
  res: AxiosResponse,
  handlers?: {
    onSuccess?: (data: In) => TOut,
    failureMap?: FailureMapper
  }
): TOut => {

  if (!handlers) handlers = {};

  const { onSuccess = defaultSuccessHandler, failureMap = {} } = handlers;

  if(isOk(res.status)) return onSuccess(res.data)

  const handlerFunc = failureMap[res.data.errorCode || res.status] ?? defaultThrow

  return handlerFunc(res.data)
}

export type FailureCodeHandler = <In, Out = void>(data: In) => Out
export type FailureMapper = { [code: number | string]: FailureCodeHandler }
