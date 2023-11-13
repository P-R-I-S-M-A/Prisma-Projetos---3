import { useEffect, useState } from 'react';
import { getDoc, doc } from 'firebase/firestore';
import { db } from "../App";
import { LuFolderCog } from "react-icons/lu";
import '../styles/pages/Home.css';
import Loading from '../components/Loading';
export default function Home(props){

    const [user, setUser] = useState([]);
    const [loading, setLoading] = useState(false);

    
    useEffect(()=>{

        if(props.userId != ''){
            getUserHome(props.userId)
        }

    },[props.userId])

    const getUserHome = async (id) => {

        setLoading(true);
  
        try {

            const querySnapshot = await getDoc(doc(db, 'users', id))
            .then((doc)=>{

                setUser(doc.data());

            });
          
        } catch (error) {

            console.error('Erro ao recuperar documentos: ', error);

        }
  
        setLoading(false);
    }

    return(
        <div className="home">

            <header>
                    <h1>Bem-vindo de volta, {user.nome}</h1>
                    <p>Sabado, 11 de novembro</p>
            </header>   

            <main>
                <div className='card_tarefa projetos_home'>
                    <div className='projetos_recentes'>
                        <p>Projetos recentes:</p>

                        <div className='container_projetos_recentes'>
                            <div className='projeto_single'>
                                <p>Nome projeto recente 1</p>
                                
                                <LuFolderCog className='img_projeto'/>

                            </div>
                            <div className='projeto_single'>
                                <LuFolderCog className='img_projeto'/>
                                
                                <p>Nome projeto recente 2</p>

                            </div>
                        </div>

                    </div>

                    <div className='lista_projetos'>
                        <p>Projetos mais proximos:</p>

                        <ul>
                            <li>
                                <p><LuFolderCog className='icon-projeto'/> Nome do projeto 1</p> 

                                <div className='informacoes'>
                                    <div className='estado'>Data de entrega: 12/12/2023</div>
                                    <p>4 Tarefas</p>
                                    <div className='estado' style={{color:'yellow'}}>
                                        <p>Em progresso</p>
                                    </div>
                                </div>
                                
                            </li>


                            <li>
                                <p><LuFolderCog className='icon-projeto'/> Nome do projeto 1</p> 

                                <div className='informacoes'>
                                    <div className='estado'>Data de entrega: 12/12/2023</div>
                                    <p>4 Tarefas</p>
                                    <div className='estado' style={{color:'yellow'}}>
                                        <p>Em progresso</p>
                                    </div>
                                </div>
                                
                            </li>

                            

                            <li>
                                <p><LuFolderCog className='icon-projeto'/> Nome do projeto 1</p> 

                                <div className='informacoes'>
                                    <div className='estado'>Data de entrega: 12/12/2023</div>
                                    <p>4 Tarefas</p>
                                    <div className='estado' style={{color:'yellow'}}>
                                        <p>Em progresso</p>
                                    </div>
                                </div>
                                
                            </li>


                            <li>
                                <p><LuFolderCog className='icon-projeto'/> Nome do projeto 1</p> 

                                <div className='informacoes'>
                                    <div className='estado'>Data de entrega: 12/12/2023</div>
                                    <p>4 Tarefas</p>
                                    <div className='estado' style={{color:'yellow'}}>
                                        <p>Em progresso</p>
                                    </div>
                                </div>
                                
                            </li>

                            
                            
                        </ul>
                    </div>
                </div>

                

                <div className=' tarefas_notificaçoes'>

                    <div className='tarefas_aux'>
                        <div className='card_tarefa tarefas'>
                            <p>Proximas tarefas:</p>

                            <ul>
                                <li>
                                    <p>Nome Tarefa 1</p>
                                    <div className='informacao'>
                                        <p>Projeto</p>
                                        <p>Entrega: 12/12</p>
                                        <p style={{color:'blue'}}>fazendo</p>
                                    </div>
                                </li>

                                <li>
                                    <p>Nome Tarefa 1</p>
                                    <div className='informacao'>
                                        <p>Projeto</p>
                                        <p>Entrega: 12/12</p>
                                        <p style={{color:'blue'}}>fazendo</p>
                                    </div>
                                </li>

                                <li>
                                    <p>Nome Tarefa 1</p>
                                    <div className='informacao'>
                                        <p>Projeto</p>
                                        <p>Entrega: 12/12</p>
                                        <p style={{color:'blue'}}>fazendo</p>
                                    </div>
                                </li>

                                <li>
                                    <p>Nome Tarefa 1</p>
                                    <div className='informacao'>
                                        <p>Projeto</p>
                                        <p>Entrega: 12/12</p>
                                        <p style={{color:'blue'}}>fazendo</p>
                                    </div>
                                </li>

                                <li>
                                    <p>Nome Tarefa 1</p>
                                    <div className='informacao'>
                                        <p>Projeto</p>
                                        <p>Entrega: 12/12</p>
                                        <p style={{color:'blue'}}>fazendo</p>
                                    </div>
                                </li>
                            </ul>
                        </div>  

                        <div className='rodas'>
                            <div className='card_tarefa tarefas_dia'>
                                <p>Seu dia:</p>
                            </div>

                            <div className='card_tarefa tarefas_semana'>
                                <p>Sua semana:</p>                        
                            </div>
                        </div>


                    </div>
                    

                    
                    

                    <div className='card_tarefa notificacoes'>
                        <p>Notificações:</p>
                    </div>

                </div>
            </main>

            {loading === true ?  <Loading/> : <></>}
        </div>
    )
}