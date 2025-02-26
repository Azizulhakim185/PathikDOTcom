import React from "react";
import Header from "../Header/Header";
import Routers from "../../../router/Routers";
import Footer from "../Footer/Footer";
import { Router } from "react-router-dom";

const Layout = () => {
    return <>
    <Header/>
    <Routers/>
    <Footer/>
    
    </>
};
export default Layout;