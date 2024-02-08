import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar";

export default function Main(){
    return (
        <div>
            <Navbar />
            <Outlet />
        </div>
    );
}