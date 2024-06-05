import {
    createBrowserRouter,
  
  } from "react-router-dom"; 
import MainLayout from "../layouts/MainLayout";
import Home from "../Pages/Home/Home";
import Community from "../Pages/Home/Community/Community";

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
        }
      ]
    },
  ]);