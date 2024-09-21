import App from "../App";
import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/Home/HomaPage";
import ProductPage from "../pages/Products/ProductPage";
import ProductDetails from "../pages/ProductDetails/ProductDetails";
import NotFound from "../pages/NotFound/NotFound";
import ProductManagement from "../pages/ProductManagement/ProductManagement";
import CreateProduct from "../pages/ProductManagement/CreateProduct";
import UpdateProduct from "../pages/ProductManagement/UpdateProduct";
import CartPage from "../pages/Cart/CartPage";
import Checkout from "../pages/Checkout/Checkout";
import OrderSuccess from "../pages/OrderSuccess/OrderSuccess";
import AboutPage from "../pages/About/AboutPage";

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
        {
          path: "update-product/:id",
          element: <UpdateProduct />,
        },
        {
          path: "cart",
          element: <CartPage />,
        },
        {
          path: "checkout",
          element: <Checkout />,
        },
        {
          path: "order-success",
          element: <OrderSuccess />,
        },
        {
          path: "about-us",
          element: <AboutPage />,
        },
      ],
    },
  ]);
