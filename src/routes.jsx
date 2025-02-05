import App from "./App";
import Cart from "./components/Cart/Cart";
import ErrorPage from "./components/ErrorPage";
import HomePage from "./components/HomePage";
import Shop from "./components/Shop/Shop";

const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: "shop",
        element: <Shop />
      },
      {
        path: "cart",
        element: <Cart />
      }
    ]
  },
  
];

export default routes;