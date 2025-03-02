import { Outlet } from "react-router-dom"
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./DefaultPage.scss"

export default function DefaultPage (){
    
    return(
        <>
        <ToastContainer
            position="top-right"
            theme="dark"
        />
        <Outlet/>
        </>
 
)
}

