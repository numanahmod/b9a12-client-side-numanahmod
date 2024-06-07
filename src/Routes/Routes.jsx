import {
    createBrowserRouter,
  
  } from "react-router-dom"; 
import MainLayout from "../layouts/MainLayout";
import Home from "../Pages/Home/Home";
import Community from "../Pages/Community/Community";
import GuideDetails from "../Pages/GuideDetails";


 export  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/community',
            element: <Community></Community>
        },
        {
          path: '/guideDetails/:_id',
          element: <GuideDetails>  </GuideDetails>,
          loader: () => fetch('TouristGuide.json')
        }
      ]
    },
  ]);