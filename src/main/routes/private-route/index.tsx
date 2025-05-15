import { Navigate } from "react-router-dom";
import { ReactNode } from "react";
import { tokenUseCase } from "../../../data/usecases/auth/token-usecase";

export const PrivateRoute = ({ element }: { element: ReactNode; }) => {
  const token = tokenUseCase?.getToken();

  return token ? (
    <>
      {element}
    </>
  ) : (
    <Navigate to="/login" replace />
  );
}; 