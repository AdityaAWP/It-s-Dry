import React from "react";
import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/home/LandingPage";
import AboutPage from "./pages/home/AboutPage";
import ArticlePage from "./pages/home/ArticlePage";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import StatisticPage from "./pages/home/StatisticPage";

const RouteList = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/about",
    element: <AboutPage />,
  },
  {
    path: "/article",
    element: <ArticlePage />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/statistic",
    element: <StatisticPage />,
  },
]);

export default RouteList;
