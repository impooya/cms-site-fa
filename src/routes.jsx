import { createBrowserRouter } from "react-router-dom";
import Root from "./pages/Root";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
]);
