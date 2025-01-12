import React from "react";
import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/home/LandingPage";
import AboutPage from "./pages/home/AboutPage";
import ArticlePage from "./pages/home/ArticlePage";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import StatisticPage from "./pages/home/StatisticPage";
import PanelLayout from "./layouts/PanelLayout";
import Dashboard from "./pages/ArticlePanel/Dashboard";
import ArticleData from "./pages/ArticlePanel/ArticleData";
import AddArticle from "./pages/ArticlePanel/AddArticle";
import EditArticle from "./pages/ArticlePanel/EditArticle";

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
  {
    path: "/article-panel",
    element: <PanelLayout />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "data",
        element: <ArticleData />,
      },
      {
        path: "write",
        element: <AddArticle />,
      },
      {
        path: "edit/:id",
        element: <EditArticle />,
      },
    ],
  },
]);

export default RouteList;
