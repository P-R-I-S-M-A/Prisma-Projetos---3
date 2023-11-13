import { Fragment, useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { auth } from "../App";
import { onAuthStateChanged } from "firebase/auth";

import Main from "../pages/Main";
import SingIn from "../auth/SingIn";
import SingUp from "../auth/SingUp";
import Loading from "../components/Loading";

export function PrivateRoute({ component: Component, authenticated, usuario }) {

    return authenticated == true ? <Component user={usuario} auth={authenticated}/> : <SingIn/>

}

export default function RoutesApp(){

    const [authenticated, setAuthenticated] = useState(false);
    const [usuario, setUsuario] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true)

        onAuthStateChanged(auth, (user) => {
        if (user) {
            setUsuario(user)
            setAuthenticated(true);
        } else {
            setAuthenticated(false);
        }

        setLoading(false)
        });

    }, [auth]);

    return(
        <>

            <BrowserRouter>
            
                <Fragment>
                
                    <Routes>

                        <Route exact path="/home/*"     element={<PrivateRoute component={Main} authenticated={authenticated} usuario={usuario}/>} />
                        <Route path="/"                 element={<SingIn />} />
                        <Route path="/login"            element={<SingIn />} />
                        <Route path="*"                 element={<SingIn />} />
                        <Route exact path="/singup"     element={<SingUp />} />
                        
                    </Routes>

                </Fragment>
                
            </BrowserRouter>

            {loading == true ?  <Loading/> : <></>}
        </>


    );
}