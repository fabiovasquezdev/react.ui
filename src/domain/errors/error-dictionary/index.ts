import { FailureMapper } from "@/data/api-response"
import { Failure } from "../enum/failure";
import { tokenUseCase } from "@/data/usecases/auth/token-usecase";

const defaultErrorDictionary = () => {
  const failure = Failure();

  const errorDictionary: FailureMapper = {
    401: () => {
      tokenUseCase.finishSession();
      throw new Error(failure["401"]);
    },
    404: () => {
      throw new Error(failure["404"]);
    },
    405: () => {
      throw new Error(failure["405"]);
    },
    415: () => {
      throw new Error(failure["415"]);
    },
    500: () => {
      throw new Error(failure["500"]);
    },
    400: (error: any) => {
      const message = failure[error?.code ?? error];
      throw new Error(message);
    },
  };

  return errorDictionary;
};

export default defaultErrorDictionary;
