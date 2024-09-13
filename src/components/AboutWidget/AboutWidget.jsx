import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const AboutWidget = () => {
    return (
        <div className="w-full">
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default AboutWidget;