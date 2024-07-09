import React from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/index";
import "./App.css";
import Layout from "./views/Layout";

const App = () => {
  return (
    <RouterProvider router={router}>
      <Layout />
    </RouterProvider>
  );
};

export default App;
