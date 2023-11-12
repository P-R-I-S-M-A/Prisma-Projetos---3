import { TbSearch } from 'react-icons/tb'
import '../styles/components/SidebarSearch.css'
import InputSing from './InputSing'

export function OpenCloseSidebarSearch(){
    let sidebar_max = document.querySelector('.sidebar-search');
    let display_aux = document.querySelector('.display-aux-sidebar-search');
    let sidebar_left = sidebar_max.getBoundingClientRect().left;

    if(sidebar_left == -600){
        sidebar_max.style.left = '0';
        display_aux.style.display = 'block';
    }else{
        sidebar_max.style.left = '-600px';
        display_aux.style.display = 'none';
    }
}

export function CloseSidebarSearch(){
    let sidebar_max = document.querySelector('.sidebar-search');
    let display_aux = document.querySelector('.display-aux-sidebar-search');

    sidebar_max.style.left = '-600px';
    display_aux.style.display = 'none';
}


export default function SidebarSearch(){
    return(
        <>
            <div className='display-aux-sidebar-search' onClick={OpenCloseSidebarSearch}></div>

            <div className="sidebar-search">
                <h1>Pesquisar</h1>

                <InputSing icon={<TbSearch/>} type={'text'} placeholder={'Pesquisar projetos ou tarefas'} />

                <div className='projects-singer'></div>
            </div>
        </>

    )
}