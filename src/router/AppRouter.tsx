import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from "./routes";
import Layout from "../components/layout/Layout";
import LandingPage from "../components/LandingPage/LandingPage";
import Ecommerce from "../components/Ecommerce/Ecommerce";
import ProductDetails from '../components/ProductDetails/ProductDetails';

const router = createBrowserRouter([
  {
    path: routes.HOME,
    element: <Layout />,
    children: [
      {
        path: routes.HOME,
        element: <LandingPage />,
      },
      {
        path: routes.ECOMMERCE,
        element: <Ecommerce />,
      },
      {
        path: routes.ECOMMERCE,
        element: <Ecommerce />,
      },
      {
        path: routes.PRODUCT_BY_ID,
        element: <ProductDetails />,
      },
    ],
  },
]);

const AppRouter: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
