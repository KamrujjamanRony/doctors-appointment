import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function Main(){
    return (
        <div>
            <Navbar />
            <Outlet />
            <ToastContainer />
        </div>
    );
}