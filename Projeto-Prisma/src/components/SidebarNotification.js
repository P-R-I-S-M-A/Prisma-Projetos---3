import '../styles/components/SidebarNotification.css';


export function OpenCloseSidebarNotification(){
    let sidebar_max = document.querySelector('.sidebar-notification');
    let display_aux = document.querySelector('.display-aux-sidebar-notification');
    let sidebar_left = sidebar_max.getBoundingClientRect().left;
    
    if(sidebar_left == -500){
        sidebar_max.style.left = '0';
        display_aux.style.display = 'block';
    }else{
        sidebar_max.style.left = '-500px';
        display_aux.style.display = 'none';
    }
}

export function CloseSidebarNotification(){
    let sidebar_max = document.querySelector('.sidebar-notification');
    let display_aux = document.querySelector('.display-aux-sidebar-notification');

    sidebar_max.style.left = '-500px';
    display_aux.style.display = 'none';
}

export default function SidebarNotification(){
    return(
        <>
            <div className="display-aux-sidebar-notification" onClick={OpenCloseSidebarNotification}></div>

            <div className="sidebar-notification">
                <h1>Notificações</h1>
            </div>
        </>
    )
}