import React, { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import NotFound from "../views/NotFound/NotFound";
import ProtectedRoute from "../components/ProtectedRoute/ProtectedRoute";
import Loading from "../components/Loading/Loading";

const Cart = lazy(() => import("../views/Cart/Cart"));
const Authentication = lazy(() =>
  import("../views/Authentication/Authentication")
);
const ProductDetails = lazy(() =>
  import("../views/ProductDetails/ProductDetails")
);
const Layout = lazy(() => import("../views/Layout"));
const Home = lazy(() => import("../views/Home/Home"));
const Profile = lazy(() => import("../views/Profile/Profile"));

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<Loading />}>
        <Layout />
      </Suspense>
    ),
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<Loading />}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: "cart",
        element: (
          <ProtectedRoute>
            <Suspense fallback={<Loading />}>
              <Cart />
            </Suspense>
          </ProtectedRoute>
        ),
      },
      {
        path: "authentication",
        element: (
          <Suspense fallback={<Loading />}>
            <Authentication />
          </Suspense>
        ),
      },
      {
        path: "profile",
        element: (
          <ProtectedRoute>
            <Suspense fallback={<Loading />}>
              <Profile />
            </Suspense>
          </ProtectedRoute>
        ),
      },
      {
        path: "products/:id",
        element: (
          <ProtectedRoute>
            <Suspense fallback={<Loading />}>
              <ProductDetails />
            </Suspense>
          </ProtectedRoute>
        ),
      },
      {
        path: "*",
        element: (
          <Suspense fallback={<Loading />}>
            <NotFound />
          </Suspense>
        ),
      },
    ],
  },
]);
