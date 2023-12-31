import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/Menu/Menu/Menu";
import Order from "../Pages/Order/Order/Order";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";
import Secret from "../Pages/Shared/Secret/Secret";
import Dashboard from "../Layout/Dashboard";
import Cart from "../Pages/Dashboard/Cart/Cart";
import Allusers from "../Pages/Dashboard/Cart/AllUsers/Allusers";
import AddItem from "../Pages/Dashboard/Cart/AddItem/AddItem";
import AdminRoute from "./AdminRoute";
import ManageItems from "../Pages/Dashboard/ManageItems/ManageItems";
import UpdateItem from "../Pages/Dashboard/updateItem/updateItem";
import Payment from "../Pages/Dashboard/Payment/Payment";
import PaymentHistory from "../Pages/Dashboard/PaymentHistory/PaymentHistory";
import UserHome from "../Pages/Dashboard/UserHome/UserHome";
import AdminHome from "../Pages/Dashboard/AdminHome/AdminHome";

export const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'menu',
                element:<Menu></Menu>
            },
            {
                path: 'order/:category',
                element:<Order></Order>
            },
            {
                path: 'login',
                element:<Login></Login>
            },
            {
                path: 'signUp',
                element: <SignUp></SignUp>
            },
            {
                path:'secret',
                element: <PrivateRoute><Secret></Secret></PrivateRoute>
            }
        ]
    },
    {
        path: 'dashboard',
        element:<Dashboard></Dashboard>,
        children:[
            // normal user routes
            
            {
                path:'userHome',
                element:<UserHome></UserHome>
            },
            
            {
                path: 'cart',
                element:<PrivateRoute><Cart></Cart></PrivateRoute>
            },
            {
                path:'payment',
                element:<Payment></Payment>
            },
            {
                path:'paymentHistory',
                element:<PaymentHistory></PaymentHistory>
            },

            // admin only routes
            {
                path:'adminHome',
                element: <AdminRoute><AdminHome></AdminHome></AdminRoute>
            },
            {
                path: 'addItems',
                element:<AdminRoute><AddItem></AddItem></AdminRoute>
            },
            {
                path:"manageItems",
                element: <AdminRoute><ManageItems></ManageItems></AdminRoute>
            }
            ,
            {
                path:'updateItem/:id',
                element:<AdminRoute><UpdateItem></UpdateItem></AdminRoute>,
                loader:({params})=> fetch(`https://bistro-boss-server-tawny-chi.vercel.app/updateItem/${params.id}`)
            }
            ,
            {
                path: 'users',
                element:<Allusers></Allusers>
            }
        ]
    }
])