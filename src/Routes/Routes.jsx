import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";

import SignIn from "../pages/Register/SignIn";
import JobDetails from "../pages/JobDetails/JobDetails";
import JobApply from "../pages/JobApply/JobApply";
import PrivetRoutes from "./PrivetRoutes";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
        {
            path:'/',
            element:<Home></Home>
        },
        // {
        //     index:true,
        //     Component:Home
        // },
        {
            path:'/register',
            element:<Register></Register>
        },
        {
            path:'/signIn',
            element:<SignIn></SignIn>
        },
        {
          path:'/jobs/:id',
          element:<JobDetails></JobDetails>,
          loader:({params})=>fetch(`http://localhost:5000/jobs/${params.id}`)
        },
        {
          path:'/jobApply/:id',
          element:<PrivetRoutes><JobApply></JobApply></PrivetRoutes>,
          loader:({params})=>fetch(`http://localhost:5000/jobs/${params.id}`)
        }
    ]
  },
]);