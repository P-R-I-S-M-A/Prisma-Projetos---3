import '../styles/components/SidebarMin.css';
import { Link, useNavigate } from "react-router-dom";
import { TbMenu2, TbSearch, TbFolder, TbFolderPlus, TbClipboardList, TbSettings, TbBell, TbLogout, TbHome } from "react-icons/tb";
import { RiQuestionLine } from 'react-icons/ri'

export default function SidebarMin(props){
    const navigate = useNavigate();


    return(
        <>
            <div className='Side-aux'></div>

            <div className="SidebarMin">
                <ul>
                    <li className='li' to=''><TbMenu2/></li>

                    <Link className='li' to=''><TbHome/></Link>
                    <Link className='li' to=''><TbSearch/></Link>
                    <Link className='li' to='/home/projects'><TbFolder/></Link>
                    <Link className='li' to=''><TbFolderPlus/></Link>
                    <Link className='li' to=''><TbClipboardList/></Link>
                    <Link className='li' to=''><TbBell/></Link>

                </ul>


                <ul className='side-footer'>
                    <Link className='li' to=''><RiQuestionLine/></Link>
                    <Link className='li' to=''><TbSettings/></Link>

                    <li className='li' onClick={props.btnLogout}><TbLogout/></li>
                </ul>
            </div>
        </>
        
    )
}