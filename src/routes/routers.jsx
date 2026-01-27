import { createBrowserRouter, Navigate } from "react-router-dom";
import Layout from "../layout/Layout";
import Error from "../pages/Error";
import CategoryNews from "../pages/CategoryNews";
import AuthLayout from "./../layout/AuthLayout";
import Login from "./../pages/Login";
import SignUp from "./../pages/SignUp";
import About from "./../components/About/About";
import Career from "./../components/Career/Career";

export const routers = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Navigate to={"/category/01"}></Navigate>,
      },
      {
        path: "/category/:id",
        element: <CategoryNews />,
        loader: ({ params }) =>
          fetch(
            `https://openapi.programming-hero.com/api/news/category/${params.id}`,
          ),
      },
    ],
    errorElement: <Error />,
  },
  {
    path: "auth",
    element: <AuthLayout />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signup",
        element: <SignUp />,
      },
    ],
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/career",
    element: <Career />,
  },
]);
