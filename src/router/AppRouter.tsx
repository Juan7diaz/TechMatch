import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import routes from './routes';
import Layout from "../components/layout/Layout";
import LandingPage from "../components/LandingPage/LandingPage";
import Ecommerce from "../components/Ecommerce/Ecommerce";

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
    ],
  },
]);

const AppRouter: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
