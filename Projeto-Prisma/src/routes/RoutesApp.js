import { Fragment, useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { auth } from "../App";
import { onAuthStateChanged } from "firebase/auth";

import Home from "../pages/Home";
import SingIn from "../auth/SingIn";
import SingUp from "../auth/SingUp";

export function PrivateRoute({ component: Component, authenticated, usuario }) {
    console.log(Component)
    return authenticated == true ? <Component user={usuario} auth={authenticated}/> : <SingIn/>

}

export default function RoutesApp(){

    const [authenticated, setAuthenticated] = useState(false);
    const [usuario, setUsuario] = useState(null);

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
        if (user) {
            setUsuario(user)
            setAuthenticated(true);
        } else {
            setAuthenticated(false);
        }
        });

        
    }, [auth]);

    return(
            <BrowserRouter>
            
                <Fragment>
                
                    <Routes>

                        <Route path="/home/*"   element={<PrivateRoute component={Home} authenticated={authenticated} usuario={usuario}/>} />
                        <Route path="/"             element={<SingIn />} />
                        <Route path="/login"        element={<SingIn />} />
                        <Route path="*"             element={<SingIn />} />
                        <Route exact path="/singup" element={<SingUp />} />
                        
                    </Routes>

                </Fragment>
                
            </BrowserRouter>

    );
}