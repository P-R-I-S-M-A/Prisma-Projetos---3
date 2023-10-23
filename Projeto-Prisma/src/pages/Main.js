import '../styles/pages/Main.css';
import '../styles/components/Account.css'
import { useState } from 'react';
import { Route, Routes, useNavigate } from "react-router-dom";
import SingOut from "../auth/SingUot";
import SidebarMin from "../components/SidebarMin";
import Projects from "./Projects";
import AddProjects from "./AddProjetos";
import Tasks from "./Tasks";
import Help from "./Help";
import Config from "./Config";
import SidebarMax from "../components/SidebarMax";
import SidebarSearch from "../components/SidebarSearch";
import Home from "./Home";
import SidebarNotification from '../components/SidebarNotification';
import Loading from '../components/Loading';
import UsrAccount from '../components/UsrAccount';

export default function Main(props){
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

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
              <div className="account">
                <UsrAccount />
              </div>
              
                <Routes>
                  
                  <Route path="/"               element={<Home/>}/>
                  <Route path="/projects"       element={<Projects/>} />
                  <Route path="/add-projects"   element={<AddProjects/>} />
                  <Route path="/tasks"          element={<Tasks/>} />
                  <Route path="/help"           element={<Help/>} />
                  <Route path="/config"         element={<Config/>} />

                </Routes>

            </div>

            {loading === true ?  <Loading/> : <></>}

        </div>
    );
}