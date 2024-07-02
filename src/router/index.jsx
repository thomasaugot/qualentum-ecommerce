import React from "react";
import { createBrowserRouter } from "react-router-dom";
import NotFound from "../views/NotFound/NotFound";
import Cart from "../views/Cart/Cart";
import Login from "../views/Login/Login";
import ProductDetails from "../views/ProductDetails/ProductDetails";
import Layout from "../views/Layout";
import Home from "../views/Home/Home";
import ProtectedRoute from "../components/ProtectedRoute/ProtectedRoute";
import Profile from "../views/Profile/Profile";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "cart",
        element: (
          <ProtectedRoute>
            <Cart />
          </ProtectedRoute>
        ),
      },
      { path: "login", element: <Login /> },
      {
        path: "profile",
        element: (
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        ),
      },
      {
        path: "products/:id",
        element: (
          <ProtectedRoute>
            <ProductDetails />
          </ProtectedRoute>
        ),
      },
      { path: "*", element: <NotFound /> },
    ],
  },
]);
