import { useEffect, useState } from 'react';
import { getDoc, doc } from 'firebase/firestore';
import { db } from "../App";
import '../styles/pages/Home.css';
import Loading from '../components/Loading';
import ProjetosTarefasRecentes from './Home/Proj_Tare_Re';
import Dashboard from './Home/Dashboard';
import CaixaNotificacoes from './Home/Caixa_Notifcacoes';
import Sugestoes from './Home/Sugestoes';
import Planner from './Home/Planner';

export default function Home(props){

    const [loading, setLoading] = useState(false);

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
                    <h1>Bem-vindo de volta, {props.prop.user_info.nome}</h1>
                    <p>{diaDeHoje()}</p>
            </header>   

            <main>
                <div className='w50'>
                    <ProjetosTarefasRecentes prop={props.prop}/>
                </div>

                <div className='w50'>
                    <Dashboard etiquetas={props.etiquetas}/>

                    <CaixaNotificacoes notificacoes={props.notificacoes}/>

                    <Sugestoes/>

                    <Planner/>
                </div>
            </main>

            {loading === true ?  <Loading/> : <></>}
        </div>
    )
}