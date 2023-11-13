import '../styles/components/SidebarMax.css';
import { Link } from "react-router-dom";
import { TbSearch, TbFolder, TbClipboardList, TbSettings, TbBell, TbLogout, TbHome } from "react-icons/tb";
import { VscGraph } from "react-icons/vsc";
import { RiQuestionLine } from 'react-icons/ri';
import Logo from '../assents/img/logo.png';
import LogoPrima from './LogoPrisma';
import { OpenCloseSidebarSearch } from './SidebarSearch';
import { OpenCloseSidebarNotification } from './SidebarNotification';

export function OpenCloseSidebarMax(){
    let sidebar_max = document.querySelector('.sidebar-max');
    let display_aux = document.querySelector('.display-aux-sidebar-max');
    let sidebar_left = sidebar_max.getBoundingClientRect().left;
    
    if(sidebar_left == -260){
        sidebar_max.style.left = '0';
        display_aux.style.display = 'block';
    }else{
        sidebar_max.style.left = '-260px';
        display_aux.style.display = 'none';
    }
}

export default function SidebarMax(props){

    return(
        <>
            <div className='display-aux-sidebar-max' onClick={OpenCloseSidebarMax}></div>

            <div className='sidebar-max'>
                <ul className='menu'>
                    
                    <li className='li'><LogoPrima/></li>

                    <li className='li' onClick={OpenCloseSidebarSearch}><TbSearch/><p>Pesquisar</p></li>

                    <Link className='li' onClick={OpenCloseSidebarMax} to='/home' ><TbHome/><p>Home</p></Link>

                    <Link className='li' onClick={OpenCloseSidebarMax} to='/home/projects'><TbFolder/><p>Projetos</p></Link>

                    <Link className='li' onClick={OpenCloseSidebarMax} to='/home/tasks'><TbClipboardList/><p>Tarefas</p></Link>

                    <li className='li'  onClick={OpenCloseSidebarNotification}><TbBell/><p>Notificações</p></li>

                    <Link className='li' onClick={OpenCloseSidebarMax} to='/home/insight'><VscGraph/><p>Insight</p></Link>

                </ul>

                <ul className='side-footer'>

                    <li className='li'><img src={Logo}/><p>Planos</p></li>

                    <Link className='li' onClick={OpenCloseSidebarMax} to='/home/help'><RiQuestionLine/><p>Suporte</p></Link>

                    <Link className='li' onClick={OpenCloseSidebarMax} to='/home/config'><TbSettings/><p>Configurações</p></Link>

                    <li className='li sair' onClick={props.btnLogout}><TbLogout/><p>Sair</p></li>
                </ul>
            </div>

            
        </>
    )
}