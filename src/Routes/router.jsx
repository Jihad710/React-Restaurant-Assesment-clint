import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/Home/Menu/Menu/Menu";
import Order from "../Pages/Order/Order/Order";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";


  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      children:[
        {
            path: "/",
            element: <Home/>
        },
        {
            path: "menu",
            element: <Menu/>
        },
        {
            path: "order",
            element: <Order/>
        },
        {
            path: "login",
            element: <Login/>
        },
        {
            path: "signup",
            element: <SignUp/>
        }
      ]
    },
  ]);