import React from "react";
import {Outlet} from "react-router-dom";
import Navbar from "./Navbar";
import image from "./../../images/background.jpg";

const Layout=() => {

    return (
        <div>
            <Navbar />
            <Outlet />
        </div>
    )

}

export default Layout;