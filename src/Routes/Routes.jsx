import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";

import SignIn from "../pages/Register/SignIn";
import JobDetails from "../pages/JobDetails/JobDetails";
import JobApply from "../pages/JobApply/JobApply";
import PrivetRoutes from "./PrivetRoutes";
import MyApplications from "../pages/MyApplications/MyApplications";
import AddJob from "../pages/AddJob/AddJob";
import MyPostedJob from "../pages/MyPostedJob/MyPostedJob";
import ViewApplications from "../pages/ViewApplications/ViewApplications";

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
        },
        {
          path:'/myapplication',
          element:<PrivetRoutes><MyApplications></MyApplications></PrivetRoutes>
        },
        {
          path:'/addJob',
          element:<PrivetRoutes><AddJob></AddJob></PrivetRoutes>
        },
        {
          path:'applications/:job_id',
          element:<PrivetRoutes><ViewApplications></ViewApplications></PrivetRoutes>,
          loader:({params})=>fetch (`http://localhost:5000/applications/job/${params.job_id}`)
        },
        {
          path:'/myPostedJob',
          element:<PrivetRoutes><MyPostedJob></MyPostedJob></PrivetRoutes>
        }
    ]
  },
]);