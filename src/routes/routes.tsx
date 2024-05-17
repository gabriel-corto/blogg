import { createBrowserRouter } from "react-router-dom";
import { App } from "../App";
import { Blog } from "../pages/Blog";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />
  }
  ,{
    path: "/blogs",
    element: <Blog />
  },
  {
    path: "/category",
    element: <h1>Category Here</h1>
  },
  {
    path: "/tags",
    element: <h1>Tags Here</h1>
  },
  {
    path: "/others",
    element: <h1>Others Here</h1>
  }
  
])