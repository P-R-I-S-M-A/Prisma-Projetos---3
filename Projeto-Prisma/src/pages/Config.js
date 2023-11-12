import '../styles/pages/Config.css';
import { TbSettings } from "react-icons/tb";
import { CloseBars } from './Home'

export default function Config(){
    return(
        <div className="config" onClick={ CloseBars }>
           <div className="configBox">
            <header className="header">
            <div className="gear"><TbSettings /></div>   
            <div className="infos">
            <span className="title">Configurações</span>
            <input type="text" className="search" placeholder="Pesquisar nas configurações"></input>
            </div>
            </header>
            <div className="break"></div>
            <div className="button1">
                <label className="switch">
                    <input type="checkbox"/>
                    <span class="slider"></span>
                </label>
            </div>    
           </div>
        </div>
    )
}