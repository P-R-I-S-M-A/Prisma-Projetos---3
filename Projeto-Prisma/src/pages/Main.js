import '../styles/pages/Main.css';
import SingOut from "../auth/SingUot";
import { Route, Routes, useNavigate } from "react-router-dom";
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

export default function Main(props){
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
          await SingOut();
          navigate('/login');

        } catch (error) {
          // Tratar erros de desconexão
        }
    }

    return(
        <div className = 'main'>
            
            <SidebarMin btnLogout={handleLogout}/>
            <SidebarMax btnLogout={handleLogout}/>
            <SidebarSearch/>
            <SidebarNotification/>

            <div className="home-main">
              
                <Routes>
                  
                  <Route path="/"               element={<Home/>}/>
                  <Route path="/projects"       element={<Projects/>} />
                  <Route path="/add-projects"   element={<AddProjects/>} />
                  <Route path="/tasks"          element={<Tasks/>} />
                  <Route path="/help"           element={<Help/>} />
                  <Route path="/config"         element={<Config/>} />

                </Routes>

            </div>

        </div>
    );
}