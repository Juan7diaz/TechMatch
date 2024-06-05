import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from "./routes";
import Layout from "../components/layout/Layout";
import LandingPage from "../components/LandingPage/LandingPage";
import Ecommerce from "../components/Ecommerce/Ecommerce";
import ProductDetails from '../components/ProductDetails/ProductDetails';
import LogIn from '../components/Auth/LogIn';
import Register from "../components/Auth/Register";
import WishedList from "../components/WishedProducts/WishedList";
import ConstructionList from "../components/ConstructionList/ConstructionList";

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
        path: routes.PRODUCT_BY_ID,
        element: <ProductDetails />,
      },
      {
        path: routes.LOGIN,
        element: <LogIn />,
      },
      {
        path: routes.REGISTER,
        element: <Register />,
      },
      {
        path: routes.WISHED,
        element: <WishedList />,
      },
      {
        path: routes.CONSTRUCTIONLIST,
        element: <ConstructionList/>,
      }
    ],
  },
]);

const AppRouter: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
