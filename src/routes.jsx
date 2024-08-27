import { createBrowserRouter } from "react-router-dom";
import Root from "./pages/Root";
import MainPage from "./pages/MainPage";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <MainPage />,
      },
    ],
  },
]);
