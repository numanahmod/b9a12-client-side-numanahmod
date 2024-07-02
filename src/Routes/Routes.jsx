import {
    createBrowserRouter,
  
  } from "react-router-dom"; 
import MainLayout from "../layouts/MainLayout";
import Home from "../Pages/Home/Home";
import Community from "../Pages/Community/Community";
import GuideDetails from "../Pages/GuideDetails";
import PackageDetailsPage from "../Pages/Home/PackageDetailsPage";
import LogIn from "../Pages/LogIn";
import Register from "../Pages/Register";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../layouts/Dashboard";
// import Cart from "../Pages/Dashboard/Cart/Cart";
import MyBookings from "../Pages/Dashboard/Cart/MyBookings";
import MyWishList from "../Pages/Dashboard/Cart/MyWishList";
import TouristProfile from "../Pages/Dashboard/Cart/TouristProfile";
import AdminProfile from "../Pages/Dashboard/Admin/AdminProfile";
import AddPackage from "../Pages/Dashboard/Admin/AddPackage";
import ManageUsers from "../Pages/Dashboard/Admin/ManageUsers";
import ErrorPage from "../Pages/ErrorPage";
import GuideProfile from "../Pages/TourisGuide/GuideProfile";
import AssignedTour from "../Pages/TourisGuide/AssignedTour";
import TypeDetails from "../Pages/Home/TypeDetails";
import StoryDetails from "../Pages/Home/StoryDetails";
import StoryAll from "../Pages/Home/StoryAll";
import Contact from "../Pages/Contact";
import About from "../Pages/About";


// import NotFoundPage from "../Pages/NotFoundPage";


 export  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement:<ErrorPage></ErrorPage>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/community',
            element: <PrivateRoute><Community></Community></PrivateRoute>
        },
        {
          path: '/guideDetails/:id',
          element: <GuideDetails>  </GuideDetails>,
          loader: ({params}) => fetch(`${import.meta.env.VITE_API_URL}/guideDetails/${params.id}`)
        },
        {
          path: '/packageDetails/:id',
          element: <PrivateRoute><PackageDetailsPage></PackageDetailsPage></PrivateRoute>,
          loader: ({params}) => fetch(`${import.meta.env.VITE_API_URL}/packageDetails/${params.id}`)
        },
        {
          path: '/logIn',
          element: <LogIn></LogIn>
        },
        {
          path: '/register',
          element: <Register></Register>
        },
        {
          path: '/typeDetails/:id',
          element: <TypeDetails></TypeDetails>,
          loader: ({params}) => fetch(`${import.meta.env.VITE_API_URL}/typeDetails/${params.id}`)
        },
        {
          path: '/storyDetails/:id',
          element: <StoryDetails></StoryDetails>,
          loader: ({params}) => fetch(`${import.meta.env.VITE_API_URL}/storyDetails/${params.id}`)
        },
        {
          path: '/allStories',
          element: <StoryAll></StoryAll>
        },
        {
          path:'/contact',
          element: <Contact></Contact>
        },
        {
          path: '/about',
          element: <About></About>
        }

      ]
    },
    {
      path: 'dashboard',
      element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
      children: [
        {
          path: 'myBookings',
          element: <MyBookings></MyBookings>,
        
        },
        {
          path: 'myWishList',
          element: <MyWishList></MyWishList>
        },
        {
          path: 'touristProfile',
          element: <TouristProfile></TouristProfile>
        },
        // admin 
        {
          path: 'adminProfile',
          element: <AdminProfile></AdminProfile>
        },
        {
          path: 'addPackage',
          element: <AddPackage></AddPackage>
        },
        {
          path: 'manageUsers',
          element: <ManageUsers></ManageUsers>
        },
        // guide 
        {
          path: 'guideProfile',
          element: <GuideProfile></GuideProfile>
        },
        {
          path: 'assignedTour',
          element: <AssignedTour></AssignedTour>
        },
        
      ]
    }
  ]);