import App from "../App";
import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/Home/HomaPage";

export const router: ReturnType<typeof createBrowserRouter> =
  createBrowserRouter([
    {
      path: "/",
      element: <App />,
      // errorElement: <NotFound />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
      ],
    },
  ]);
