import App from "../App";
import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/Home/HomaPage";
import ProductPage from "../pages/Products/ProductPage";
import ProductDetails from "../pages/ProductDetails/ProductDetails";
import NotFound from "../pages/NotFound/NotFound";
import ProductManagement from "../pages/ProductManagement/ProductManagement";
import CreateProduct from "../pages/ProductManagement/CreateProduct";

export const router: ReturnType<typeof createBrowserRouter> =
  createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <NotFound />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "products",
          element: <ProductPage />,
        },
        {
          path: "products-details/:id",
          element: <ProductDetails />,
        },
        {
          path: "product-management",
          element: <ProductManagement />,
        },
        {
          path: "create-product",
          element: <CreateProduct />,
        },
      ],
    },
  ]);
