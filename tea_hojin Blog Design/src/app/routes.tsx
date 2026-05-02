import { createBrowserRouter, Navigate } from "react-router";
import { Root } from "./layout/Root";
import Home from "./pages/Home";
import About from "./pages/About";
import CategoryList from "./pages/CategoryList";
import Article from "./pages/Article";
import NotFound from "./pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
      { path: ":category", Component: CategoryList },
      { path: ":category/:slug", Component: Article },
      { path: "*", Component: NotFound },
    ],
  },
]);
