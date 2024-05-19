import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Stays from "../Components/pages/Stays";
import Layout from "../Components/global/Layout";
import Experiences from "../Components/pages/Experiences";
import Online from "../Components/pages/Online";
import LivePage from "../Components/pages/LivePage";
import Register from "../Components/Auth/Register";
import Login from "../Components/Auth/Login";
import MeHome from "../Components/pages/MeHome";

const route=createBrowserRouter([
    {
        element:<Layout/>,
        children:[
            {
                path:'/',
                element:<Stays/>
            },
            {
                path:'/experiences',
                element:<Experiences/>
            },
            {
                path:'/online',
                element:<Online/>
            },
            {
                path:'/navigate/:id',
                element:<LivePage/>
            },          
            {
                path:'/register',
                element:<Register/>
            }, 
            {
                path:'/login',
                element:<Login/>
            },
            {
                path:'/mehome',
                element:<MeHome/>
            },
        ]
    }
])
const Routers=()=>{
    return <RouterProvider router={route}/>
}
export default Routers