import '../styles/pages/Main.css';
import { useEffect, useState } from 'react';
import { Route, Routes, useNavigate } from "react-router-dom";
import { collection, getDocs, where, query, getDoc, doc, orderBy } from 'firebase/firestore';
import { db } from "../App";
import { signOut } from "firebase/auth";
import { auth } from "../App";
import SidebarMin from "../components/SidebarMin";
import Projects from "./Projects";
import Insight from "./insight";
import Tasks from "./Tasks";
import Help from "./Help";
import Config from "./Config";
import SidebarMax from "../components/SidebarMax";
import SidebarSearch from "../components/SidebarSearch";
import Home from "./Home";
import SidebarNotification from '../components/SidebarNotification';
import Loading from '../components/Loading';
import Perfil from './Perfil';
import CriarProjeto from './Projects/Btn_Criar_Pro';

export default function Main(props){

    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [user_info, setUser_info] = useState([]);
    const [IDuser, setIDUser] = useState([]);
    const [projetos, setProjetos] = useState([]);
    const [IDprojetos, setIDProjetos] = useState([]);
    const [projetosT, setProjetosT] = useState([]);
    const [IDprojetosT, setIDProjetosT] = useState([]);
    const [tarefas, setTarefas] = useState([]);
    const [IDTarefas, setIDTarefas] = useState([]);
    const [notificacoes, setNotificacoes] = useState([]);
    const [IDnotificacoes, setIDNotificacoes] = useState([]);
    const [cards, setCards] = useState([]);
    const [IDcards, setIDCards] = useState([]);
    const [a_fazer, setA_fazer] = useState(0);
    const [fazendo, setFazendo] = useState(0);
    const [feito, setFeito] = useState(0);
    const [a_fazerH, setA_fazerH] = useState('');
    const [fazendoH, setFazendoH] = useState('');
    const [feitoH, setFeitoH] = useState('');
    const [projetoAtual, setProjetoAtual] = useState('');
    const [mapa, setMapa] = useState({  tarefasCardsMap: new Map(), 
                                        totalTarefasMap: new Map(),   
                                        fotosMap: new Map(), 
                                        todosCardsMap: new Map(),
                                        IDtodosCardsMap: new Map(),
                                        cardComTarefasMap: new Map()
                                    });

    var contador_n = 0;

    useEffect(()=>{
        //navigate('/home')
      if(props.user.uid !== undefined){
          if(contador_n < 1){
            getUserUid(props.user.uid);
            contador_n++;
          }
      }
     
    },[props.user.uid])

    const getUserUid = async (uid) => {
      
        setLoading(true); 

            const querySnapshot = await getDocs(query(collection(db, 'users'), where("UID", "==", uid)));

            querySnapshot.forEach((doc) => {
              
                setUser_info(doc.data())
                setIDUser(doc.id)
                getProjetosRecentes(doc.id)
                getProjetosTodos(doc.id)
                getTarefasUrgentes(doc.id)
                getQuantidadeDeEtiqueta(doc.id)
                getNotificacoes(doc.id)
                
            });

        setLoading(false)
    }

    const getProjetosRecentes = async (id) => { 
        const querySnapshot = await getDocs(query(collection(db, 'projetos'), where("membros", "array-contains", id), orderBy('ultimo_acesso', 'desc')));

        setProjetos(querySnapshot.docs.map(projetos=>{    return projetos.data();   }));

        setIDProjetos(querySnapshot.docs.map(projetos=>{    return projetos.id;    }));

        querySnapshot.forEach(async(projetos)=>{
            const querySnapshot_tarefas = await getDocs(query(collection(db, 'tarefas'), where("projeto_id", "==", projetos.id), where("membros", "array-contains", id)));
            
            setMapa((prevState) => {  
                const novoMap = new Map(prevState.totalTarefasMap);
                novoMap.set(projetos.id, querySnapshot_tarefas.size);
                return { ...prevState, totalTarefasMap: novoMap };
            });
        })
        
        getFotosPerfil(querySnapshot);
    }

    const getProjetosTodos = async (id) => {
        
        const querySnapshot = await getDocs(query(collection(db, 'projetos'), where("membros", "array-contains", id)));

        setProjetosT(querySnapshot.docs.map(projetos=>{   return projetos.data();   }));

        setIDProjetosT(querySnapshot.docs.map(projetos=>{   return projetos.id;    }));

        querySnapshot.forEach(async(projetos)=>{
            const querySnapshot_tarefas_do_user = await getDocs(query(collection(db, 'tarefas'), where("projeto_id", "==", projetos.id), where("membros", "array-contains", id)));
            
            setMapa((prevState) => {  
                const novoMap = new Map(prevState.totalTarefasMap);
                novoMap.set(projetos.id, querySnapshot_tarefas_do_user.size);
                return { ...prevState, totalTarefasMap: novoMap };
            }); 

            const querySnapshot_tarefas = await getDocs(query(collection(db, 'tarefas'), where("projeto_id", "==", projetos.id)));

            setMapa((prevState) => {  
                const novoMap = new Map(prevState.tarefasCardsMap);
                novoMap.set(projetos.id, querySnapshot_tarefas.docs.map(tarefa=>{   return tarefa.data();   }));
                return { ...prevState, tarefasCardsMap: novoMap };
            })

            const querySnapshot_cards = await getDocs(query(collection(db, 'cards'), where("projeto_id", "==", projetos.id)));

            setMapa((prevState) => {  
                const novoMap = new Map(prevState.todosCardsMap);
                novoMap.set(projetos.id, querySnapshot_cards.docs.map(card=>{   return card.data();   }));
                return { ...prevState, todosCardsMap: novoMap };
            })

            setMapa((prevState) => {  
                const novoMap = new Map(prevState.IDtodosCardsMap);
                novoMap.set(projetos.id, querySnapshot_cards.docs.map(card=>{   return card.id;   }));
                return { ...prevState, IDtodosCardsMap: novoMap };
            })


            setIDCards(querySnapshot_cards.docs.map(card=>{   return card.id;    }));

        })

        getFotosPerfil(querySnapshot);
    }

    const getTarefasUrgentes = async (id) => {

        const querySnapshot = await getDocs(query(collection(db, 'tarefas'), where("membros", "array-contains", id), orderBy('carga')));

        setTarefas(querySnapshot.docs.map(tarefas=>{   return tarefas.data();   }));

        setIDTarefas(querySnapshot.docs.map(tarefas=>{   return tarefas.id;   }));

        getFotosPerfil(querySnapshot);
    }

    const abrirPageTarefa = async (id)=>{

        setLoading(true);

        setCards(mapa.todosCardsMap.get(id))

        setProjetoAtual(id)

        mapa.IDtodosCardsMap.get(id).map(card=>{
            setMapa((prevState) => {  
                const novoMap = new Map(prevState.cardComTarefasMap);
                novoMap.set(card, mapa.tarefasCardsMap.get(id).filter(doc=> doc.card_id == card));
                return { ...prevState, cardComTarefasMap: novoMap };
            })
        })

        navigate('/home/tasks');

        setLoading(false)
    }

    const getQuantidadeDeEtiqueta = async (id) => {
        let a_fazer = 0;
        let fazendo = 0;
        let feito = 0;
            
        const querySnapshot = await getDocs(query(collection(db, 'tarefas'), where("membros", "array-contains", id)));

        querySnapshot.forEach((doc)=>{
            if(doc.data().etiqueta == 'A fazer'){
                a_fazer++
            }
            if(doc.data().etiqueta == 'Fazendo'){
                fazendo++
            }
            if(doc.data().etiqueta == 'Feito'){
                feito++
            }
        })

        const arrayDeValores = [a_fazer, fazendo, feito];

        // Ordena o array em ordem decrescente
        let a = arrayDeValores.sort(function (x, y) {
        return y - x;
        });

        if(arrayDeValores[0] == a_fazer){
            setA_fazerH(`100%`)
         
            setFazendoH(`${(fazendo*100)/a_fazer}%`)

            setFeitoH(`${(feito*100)/a_fazer}%`)
        }

        else if(arrayDeValores[0] == fazendo){
            setFazendoH(`100%`)

            setA_fazerH(`${(a_fazer*100)/fazendo}%`)

            setFeitoH(`${(feito*100)/fazendo}%`)

        }
        else if(arrayDeValores[0] == feito){

            setFeitoH(`100%`)

            setFazendoH(`${(a_fazer*100)/feito}%`)

            setA_fazerH(`${(fazendo*100)/feito}%`)
        } 

        setA_fazer(a_fazer)
        setFazendo(fazendo)
        setFeito(feito)
    }

    const getNotificacoes = async (id) =>{

        const querySnapshot = await getDocs(query(collection(db, 'notificacao'), where("user_id", "==", id)));

        setNotificacoes(querySnapshot.docs.map(notificacoes=>{
  
            return notificacoes.data();

        }));

        setIDNotificacoes(querySnapshot.docs.map(notificacoes=>{
  
            return notificacoes.id;

        }));
        
        getFotosPerfil(querySnapshot)

    }

    const getFotosPerfil = async (querySnapshot)=> {
        const promises = querySnapshot.docs.map(async (tarefa) => {
            return Promise.all(
                
                tarefa.data().membros.map(async (membro) => {
                    
                if (!mapa.fotosMap.has(membro)) {
    
                    const querySnapshot = await getDoc(doc(db, 'users', membro));
                    setMapa((prevState) => {
                        const novoMap = new Map(prevState.fotosMap);
                        novoMap.set(membro, querySnapshot.data().foto);
                        return { ...prevState, fotosMap: novoMap };
                    });
                }
                })
            );
        });
    
        // Aguardar a resolução de todas as promessas antes de prosseguir
        await Promise.all(promises); 
    }

    const handleLogout = async () => {

        setLoading(true);
  
            signOut(auth)
            navigate('/login');
  
        setLoading(false);
    }

    
    return(
        <div className = 'main'>
            
            <SidebarMin btnLogout={handleLogout}/>
            <SidebarMax btnLogout={handleLogout}/>
            <SidebarSearch/>
            <SidebarNotification/>
            <CriarProjeto IDuser={IDuser} getProjetosTodos={getProjetosTodos} getProjetosRecentes={getProjetosRecentes}/>

            <div className="home-main">
                
                <Routes>
                  
                  <Route path="/"               element={<Home      prop={{user_info, projetos, IDprojetos, projetosT, IDprojetosT, mapa, tarefas, IDTarefas, abrirPageTarefa}} 
                                                                    etiquetas={{a_fazer, fazendo, feito, a_fazerH, fazendoH, feitoH}}  
                                                                    notificacoes={{notificacoes, IDnotificacoes, mapa}} />}/>
                  <Route path="/projects"       element={<Projects  prop={{projetos, IDprojetos, projetosT, IDprojetosT, mapa, abrirPageTarefa}}   />} />
                  <Route path="/insight"        element={<Insight   />} />
                  <Route path="/tasks"          element={<Tasks     prop={{mapa, projetoAtual, cards, IDcards}}    />} />
                  <Route path="/help"           element={<Help      prop={{mapa, projetoAtual}}  />} />
                  <Route path="/config"         element={<Config    />} />
                  <Route path="/perfil"         element={<Perfil    />} />
                  <Route path="/nome"           element={<Perfil    />} />

                </Routes>

            </div>

            {loading === true ?  <Loading/> : <></>}

        </div>
    );
}