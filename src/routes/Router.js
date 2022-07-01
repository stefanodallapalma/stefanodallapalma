import { lazy } from "react";
import { Navigate } from "react-router-dom";

/****Layouts*****/
const FullLayout = lazy(() => import("../layouts/FullLayout/FullLayout.js"));
/****End Layouts*****/

/*****Pages******/
const Home = lazy(() => import("../components/Home/Home.js"));


/*****Routes******/

const ThemeRoutes = [
    {
      path: "/",
      element: <FullLayout />,
      children: [
        { path: "/", element: <Navigate to="home" /> },
        { path: "home", exact: true, element: <Home /> },
      ],
    },
  ];
  
  export default ThemeRoutes;
  