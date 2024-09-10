import { createBrowserRouter } from "react-router-dom";
import Root from "./pages/Root";
import MainPage from "./pages/MainPage";
import Products from "./pages/Products";
import Comments from "./pages/Comments";
import Users from "./pages/Users";
import Orders from "./pages/Orders";
import Offers from "./pages/Offers";
import ErrorPage from "./pages/ErrorPage";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <MainPage />,
      },
      {
        path: "/products",
        element: <Products />,
        loader: () => {
          return "products";
        },
      },
      {
        path: "/comments",
        element: <Comments />,
        loader: () => {
          return "comments";
        },
      },
      {
        path: "/users",
        element: <Users />,
        loader: () => {
          return "users";
        },
      },
      {
        path: "/orders",
        element: <Orders />,
      },
      {
        path: "/offers",
        element: <Offers />,
      },
    ],
  },
]);
