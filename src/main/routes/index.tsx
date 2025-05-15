import {
  createBrowserRouter,
  Outlet,
} from "react-router-dom";
import { ERoute } from "../paths/routes";
import { HomePage } from "@/presentation/pages/private/home";
import { PrivateRoute } from "./private-route";
import NotFoundPage from "@/presentation/pages/private/notfound";
import { LoginPage } from "@/presentation/pages/public/login";

export const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <PrivateRoute element={<Outlet />} />,
      children: [
        { path: ERoute.home, element: <HomePage /> },
      ]
    },
    {
      path: "/login",
      element: <Outlet />,
      children: [
        { path: ERoute.login, element: <LoginPage /> },
      ]
    },
    {
      path: "*",
      element: <NotFoundPage />
    }
  ],
  { basename: "/" }
)