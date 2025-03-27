import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

import App from "./App.jsx";
import NavigationBar from "./components/NavigationBar/NavigationBar.jsx";
import HomePage from "./components/HomePage/HomePage.jsx";
import ProductPage from "./components/ProductPage/ProductPage.jsx";
import CartPage from "./components/CartPage/CartPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "productpage",
        element: <ProductPage />,
      },
      {
        path: "cartpage",
        element: <CartPage />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
