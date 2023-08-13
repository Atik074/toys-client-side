import { createBrowserRouter } from "react-router-dom";
import Main from "../LayOut/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Home/LogIn/Login";
import SignUp from "../Pages/Home/SignUp/SignUp";
import AddToys from "../Pages/Home/Home/AddToys/AddToys";
import ToyDetails from "../Pages/Home/ToyDetails/ToyDetails";
import PrivateRoute from "./PrivateRoute";
import AllToys from "../AllToys/AllToys";
import MyOrders from "../Pages/Home/MyToys/MyOrders";
import MyOrdersTable from "../Pages/Home/MyToys/MyOrdersTable";
import UpdateOrder from "../Pages/Home/Home/UpdateOrder/UpdateOrder";
import Error from "../ErroPage/Error";
import Blog from "../Pages/Home/Blog/Blog";

  const router = createBrowserRouter([


    { 
      path:'/*',
     element:<Error></Error>
  },

    {  path: '/' ,
        element:<Main></Main> ,

        children:[
            {  path: '/' ,
               element:<Home></Home>
            } ,
            { path:'/login' ,
              element:<Login/>
            },
            { path:'/signUp' ,
              element:<SignUp/>
            } ,
            { path:'/addToys' ,
              element:<AddToys/>
            },

            { path:'/alltoys/:id' ,
              element:<PrivateRoute><ToyDetails></ToyDetails></PrivateRoute> ,
              loader:({params})=> fetch(`https://toy-assignment-server-zeta.vercel.app/alltoys/${params.id}`)
            } ,

            { path:'/alltoys' ,
              element:<AllToys/> ,
             },

           {
             path:'/orders/:id'  ,
             element:<PrivateRoute><MyOrders/></PrivateRoute>,
             loader:({params})=> fetch(`https://toy-assignment-server-zeta.vercel.app/alltoys/${params.id}`)


          } ,

          {
             path:'/myOrders',
             element: <MyOrdersTable/>
          } ,

          { 
             path:'/updateOrder/:id' ,
             element:<UpdateOrder></UpdateOrder> ,
             loader:({params})=>fetch(`https://toy-assignment-server-zeta.vercel.app/orders/${params.id}`)
          
          } ,

          {
             path:'/blogs' ,
             element:<Blog/>
          }
           



        ]
    } ,
   
 

])

export default router ;