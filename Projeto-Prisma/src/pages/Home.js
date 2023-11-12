import '../styles/pages/Home.css';
import { CloseSidebarMax } from '../components/SidebarMax';
import { CloseSidebarNotification } from '../components/SidebarNotification';
import { CloseSidebarSearch } from '../components/SidebarSearch';

export function CloseBars(){
    CloseSidebarMax();
    CloseSidebarNotification();
    CloseSidebarSearch();
}

export default function Home(){


    return(
        <div className="home" onClick={ CloseBars } >
            <div className="box">
                <div className="mprojects">
                </div>
                <div className="blocks">
                    <div className="progress">
                    </div>
                    <div className="notif">
                    </div>
                    <div className="bLeft">
                    </div>
                    <div className="bRight">
                    </div>
                </div>
            </div>    
        </div>
    )
}