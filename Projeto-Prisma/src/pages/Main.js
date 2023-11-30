import '../styles/pages/Main.css';
import { useEffect, useState } from 'react';
import { Route, Routes, useNavigate } from "react-router-dom";
import { collection, getDocs, where, query } from 'firebase/firestore';
import { db } from "../App";
import SingOut from "../auth/SingUot";
import SidebarMin from "../components/SidebarMin";
import Projects from "./Projects";
import Insight from "./insight";
import Tasks from "./Tasks";
import Help from "./Help";
import Config from "./Config";
import SidebarMax from "../components/SidebarMax";
import SidebarSearch from "../components/SidebarSearch";
import Home from "./Home";
import SidebarNotification from '../components/SidebarNotification';
import Loading from '../components/Loading';
import Perfil from './Perfil';

export default function Main(props){

    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [IdUsuario_FB, setIdUsuario_FB] = useState();

    useEffect(()=>{

        getUserUid(props.user.uid);

    }, [props.user.uid])


    const getUserUid = async (uid) => {

        setLoading(true);

        try {
            const querySnapshot = await getDocs(query(collection(db, 'users'), where("UID", "==", uid)));

            querySnapshot.forEach((doc) => {
              
                setIdUsuario_FB(doc.id);

            });

        } catch (error) {

          console.error('Erro ao recuperar documentos: ', error);
          
        }

        setLoading(false)
    }

    const handleLogout = async () => {

      setLoading(true);

        try {
          await SingOut();
          navigate('/login');

        } catch (error) {
          // Tratar erros de desconexão
        }

      setLoading(false);
    }


    return(
        <div className = 'main'>
            
            <SidebarMin btnLogout={handleLogout}/>
            <SidebarMax btnLogout={handleLogout}/>
            <SidebarSearch/>
            <SidebarNotification/>

            <div className="home-main">
                
                <Routes>
                  
                  <Route path="/"              element={<Home ID_usuario_FB={IdUsuario_FB}/>}/>
                  <Route path="/projects/*"    element={<Projects  />} />
                  <Route path="/insight"       element={<Insight   />} />
                  <Route path="projects/tasks" element={<Tasks     />} />
                  <Route path="/help"          element={<Help      />} />
                  <Route path="/config"        element={<Config    />} />
                  <Route path="/perfil"        element={<Perfil    />} />
                  <Route path="/nome"          element={<Perfil   />} />

                </Routes>

            </div>

            {loading === true ?  <Loading/> : <></>}

        </div>
    );
}