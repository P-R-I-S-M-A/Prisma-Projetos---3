import SingOut from "../auth/SingUot";
import { Route, Routes, useNavigate } from "react-router-dom";
import SidebarMin from "../components/SidebarMin";
import Projects from "./Projects";
import AddProjects from "./AddProjetos";
import Tasks from "./Tasks";
import '../styles/pages/Home.css';
import Help from "./Help";
import Config from "./Config";
import SidebarMax from "../components/SidebarMax";
import SidebarSearch from "../components/SidebarSearch";

export default function Home(props){
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
        <div className = 'Home'>
            
            <SidebarMin btnLogout={handleLogout}/>
            <SidebarMax btnLogout={handleLogout}/>
            <SidebarSearch/>

            <div className="home-main">
              
                <Routes>

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