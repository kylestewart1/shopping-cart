import App from "./App";
import Cart from "./components/Cart";
import ErrorPage from "./components/ErrorPage";
import HomePage from "./components/HomePage";


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
        path: "cart",
        element: <Cart />
      }
    ]
  },
  
];

export default routes;