import '../styles/components/SidebarMin.css';
import { Link, useNavigate } from "react-router-dom";
import { TbMenu2, TbSearch, TbFolder, TbFolderPlus, TbClipboardList, TbSettings, TbBell, TbLogout, TbHome } from "react-icons/tb";
import { RiQuestionLine } from 'react-icons/ri';
import Logo from '../assents/img/logo.png';
import { OpenCloseSidebarMax } from './SidebarMax';
import { OpenCloseSidebarSearch } from './SidebarSearch';



export default function SidebarMin(props){
    const navigate = useNavigate();


    return(
        <>
            <div className='Side-aux'></div>

            <div className="SidebarMin">
                <ul>
                    <li className='li' title='Expandir' onClick={OpenCloseSidebarMax}><TbMenu2/></li>

                    <li className='li' title='Pesquisar projeto' onClick={OpenCloseSidebarSearch}><TbSearch/></li>

                    <Link className='li' title='Home' to='/home' ><TbHome/></Link>

                    <Link className='li' title='Projetos' to='/home/projects'><TbFolder/></Link>

                    <Link className='li' title='Criar Projeto' to='/home/add-projects'><TbFolderPlus/></Link>

                    <Link className='li' title='Tarefas' to='/home/tasks'><TbClipboardList/></Link>

                    <li className='li' title='Notificações' to=''><TbBell/></li>

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