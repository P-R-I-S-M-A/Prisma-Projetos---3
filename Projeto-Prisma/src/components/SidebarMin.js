import '../styles/components/SidebarMin.css';
import { Link, useNavigate } from "react-router-dom";
import { TbMenu2, TbSearch, TbFolder, TbFolderPlus, TbClipboardList, TbSettings, TbBell, TbLogout, TbHome, TbChartDonut } from "react-icons/tb";
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

                    <Link className='li' title='Estatísticas' to='/home/add-projects'><TbChartDonut/></Link>

                    <Link className='li' title='Tarefas' to='/home/tasks'><TbClipboardList/></Link>

                    <li className='li' title='Notificações' onClick={OpenCloseSidebarNotification}><TbBell/></li>

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