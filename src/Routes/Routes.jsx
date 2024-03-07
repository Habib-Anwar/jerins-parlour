import {
    createBrowserRouter,
   
  } from "react-router-dom";
import { Main } from "../Layout/Main";
import { Home } from "../Pages/Home/Home/Home";
import { Login } from "../Pages/Login/Login";
import { CreateAccount } from "../Pages/CreateAccount/CreateAccount";


  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: "/",
            element: <Home></Home>
        },
      ]
    },
    {
      path: "/login",
      element:<Login></Login>
    },
    {
      path: "/createaccount",
      element: <CreateAccount></CreateAccount>
    }
  ]);