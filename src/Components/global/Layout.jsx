import '../../index.css'
import { Outlet } from "react-router-dom"
import Header from "./Header"
import Carousel from './Carousel'

const Layout=()=>{
    return(
        <div>
           <Header/>
           <Carousel/>
            <Outlet/>
        </div>
    )
}
export default Layout