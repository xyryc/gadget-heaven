import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Statistics from "../pages/Statistics";
import Dashboard from "../pages/Dashboard";
import ProductCards from "../components/ProductCards";
import ProductDetails from "../pages/ProductDetails";
import ErrorPage from "../pages/ErrorPage";
import About from "../pages/About";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("../categories.json"),
        children: [
          {
            path: "/",
            element: <ProductCards />,
            loader: () => fetch("../gadgetData.json"),
          },
          {
            path: "/category/:category",
            element: <ProductCards />,
            loader: () => fetch("../gadgetData.json"),
          },
        ],
      },
      {
        path: "/products/:productId",
        element: <ProductDetails />,
        loader: () => fetch("../gadgetData.json"),
      },
      {
        path: "/statistics",
        element: <Statistics />,
        loader: () => fetch("../gadgetData.json"),
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
        loader: () => fetch("../gadgetData.json"),
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
]);

export default routes;
