import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";

import RootLayout from "./pages/RootLayout";
import AuthLayout from "./pages/AuthLayout";
import SignUp from "./components/sign-in-up/SignUp";
import SignIn from "./components/sign-in-up/SignIn";
import Portal from "./components/Portal";
import UsersDetails from "./components/UserDetails";
import Settings from "./components/Settings";
import ProtectRoute from "./components/ProtectRoute";
import NotFound from "./components/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AuthLayout />,
    errorElement: <NotFound />,

    children: [
      {
        index: true,
        element: <Navigate to="/sign-in" replace />,
      },
      {
        path: "sign-in",
        element: <SignIn />,
      },
      {
        path: "sign-up",
        element: <SignUp />,
      },
    ],
  },
  {
    element: <ProtectRoute />, 
    errorElement: <NotFound />,
    children: [
      {
        path: "/portal",
        element: <RootLayout />, 
        children: [
          {
            index: true,
            element: <Portal />,
          },
          {
            path: "settings",
            element: <Settings />,
          },
          {
            path: "users-details/:id",
            element: <UsersDetails />,
          },
        ],
      },
    ],
  },

]);

export default function App() {
  return <RouterProvider router={router} />;
}
