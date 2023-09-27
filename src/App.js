import ReactDOM from "react-dom/client";
import React from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import Error from "./components/Error";
import Cart from "./components/Cart";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import AppStore from "./utils/AppStore";
import { Provider } from "react-redux";

export const App = () => {
  return (
    <Provider store={AppStore}>
      <Header />
      <Outlet />
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
