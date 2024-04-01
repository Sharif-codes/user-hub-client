import { Outlet } from "react-router-dom";
import Navbar from "../shared/Navbar";

const MainLayOut = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayOut;