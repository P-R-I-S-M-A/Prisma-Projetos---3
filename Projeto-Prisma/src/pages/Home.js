import SingOut from "../auth/SingUot";
import { Route, Routes, useNavigate } from "react-router-dom";
import SidebarMin from "../components/SidebarMin";
import '../styles/pages/Home.css';
import Projects from "./Projects";
import { PrivateRoute } from "../routes/RoutesApp";

export default function Home(props){
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
          await SingOut();
          navigate('/login');

        } catch (error) {
          // Tratar erros de desconexão
          console.error(error.message);
        }
    }

    return(
        <div className = 'Home'>
            
            <SidebarMin btnLogout={handleLogout}/>

            <div className="home-main">
              
                <Routes>

                  <Route path="/projects"   element={<Projects/>} />

                </Routes>

            </div>

        </div>
    );
}