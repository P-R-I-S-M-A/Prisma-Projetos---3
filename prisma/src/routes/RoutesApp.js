import { Fragment, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import SingIn, { teste } from "../pages/SingIn";
import SingUp from "../pages/SingUp";


const Private = ({ Item }) => {
    return teste  ? <Item /> : <SingIn />;
  };


export default function RoutesApp(){
    
    return(
        <BrowserRouter>
            <Fragment>
                <Routes>
                    <Route exact path="/home" element={<Private Item={Home} />} />
                    <Route path="/" element={<SingIn />} />
                    <Route path="*" element={<SingIn />} />
                    <Route exact path="/singup" element={<SingUp />} />
                </Routes>
            </Fragment>
        </BrowserRouter>
    );
}