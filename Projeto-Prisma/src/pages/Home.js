import { useEffect, useState } from 'react';
import { getDoc, doc } from 'firebase/firestore';
import { db } from "../App";
import '../styles/pages/Home.css';
import Loading from '../components/Loading';
import ProjetosTarefasRecentes from './Home/Proj_Tare_Re';
import Dashboard from './Home/Dashboard';

export default function Home(props){

    const [loading, setLoading] = useState(false);
    const [user_FB, setUser_FB] = useState([]);
    
    useEffect(()=>{
        if(props.ID_usuario_FB !== undefined){

            getInfoUser(props.ID_usuario_FB)
            
        }
    },[props.ID_usuario_FB])

    const getInfoUser = async (id) => {

        setLoading(true);

        try {

            const querySnapshot = await getDoc(doc(db, 'users', id))

            setUser_FB(querySnapshot.data())
          
        } catch (error) {

            console.error('Erro ao recuperar documentos: ', error);

        }

        setLoading(false);
    }

    function diaDeHoje(){
        const dataAtual = new Date();

        // Obter o dia em numeral (1-31)
        const dia = dataAtual.getDate();
    
        // Obter o mês em extenso
        const mes = new Intl.DateTimeFormat('pt-BR', { month: 'long' }).format(dataAtual);
    
        const diasDaSemana = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];
    
        // Obter o índice do dia da semana (0 a 6)
        const indiceDiaSemana = dataAtual.getDay();
    
        // Obter o nome do dia da semana
        const diaSemana = diasDaSemana[indiceDiaSemana];

        return `${diaSemana}, ${dia} ${mes}`;
    }


    return(
        <div className="home">

            <header>
                    <h1>Bem-vindo de volta, {user_FB.nome}</h1>
                    <p>{diaDeHoje()}</p>
            </header>   

            <main>
                <div className='w50'>
                    <ProjetosTarefasRecentes ID_usuario_FB={props.ID_usuario_FB}/>
                </div>

                <div className='w50'>
                    <Dashboard ID_usuario_FB={props.ID_usuario_FB}/>
                </div>
            </main>

            {loading === true ?  <Loading/> : <></>}
        </div>
    )
}