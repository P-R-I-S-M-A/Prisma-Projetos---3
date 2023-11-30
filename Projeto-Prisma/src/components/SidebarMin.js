import '../styles/components/SidebarMin.css';
import { Link, useNavigate } from "react-router-dom";
import { TbUser, TbMenu2, TbSearch, TbFolder, TbClipboardList, TbSettings, TbBell, TbLogout, TbHome } from "react-icons/tb";
import { VscGraph } from "react-icons/vsc";
import { RiQuestionLine } from 'react-icons/ri';
import Logo from '../assents/img/prisma_branco_v2.png';
import { OpenCloseSidebarMax } from './SidebarMax';
import { OpenCloseSidebarSearch } from './SidebarSearch';
import { OpenCloseSidebarNotification } from './SidebarNotification';



export default function SidebarMin(props){
    const navigate = useNavigate();


    return(
        <>
            <div className='Side-aux'></div>

            <div className="SidebarMin">
                <ul>
                    <li className='li' title='Expandir' onClick={OpenCloseSidebarMax}><TbMenu2/></li>

                    <li className='li' title='Pesquisar' onClick={OpenCloseSidebarSearch}><TbSearch/></li>

                    <Link className='li' title='Home' to='/home' ><TbHome/></Link>

                    <Link className='li' title='Projetos' to='/home/projects'><TbFolder/></Link>

                    <li className='li' title='Notificações' onClick={OpenCloseSidebarNotification}><TbBell/></li>

                    <Link className='li' title='Relatorios' to='/home/insight'><VscGraph/></Link>

                    <Link className='li' title='Perfil' to='/home/perfil'><TbUser/></Link>


                </ul>


                <ul className='side-footer'>

                    <li className='li'><img src={Logo}/></li>

                    <Link className='li' title='Ajuda' to='/home/help'><RiQuestionLine/></Link>
                    <Link className='li' title='Configurações' to='/home/config'><TbSettings/></Link>

                    <li className='li' title='Sair' onClick={props.btnLogout}><TbLogout/></li>
                </ul>
            </div>
        </>
        
    )
}