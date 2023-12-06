import { useEffect } from 'react';
import '../../styles/pages/Home/Dashboard.css';
import { collection, getDocs, where, query } from 'firebase/firestore';
import { db } from "../../App";


export default function Dashboard(props){
    return(
        <div className="dashboard">
            <h3>Dashboard</h3>

            <div className='container_dashboard'>
                <div className='container_grafico'>
                    <div className='caixa_grafico'>

                        <div className='coluna a_fazer' style={{height: props.etiquetas.a_fazerH}}><p>{props.etiquetas.a_fazer}</p></div>

                        <div className='coluna fazendo'style={{height: props.etiquetas.fazendoH}}><p>{props.etiquetas.fazendo}</p></div>

                        <div className='coluna feito'style={{height: props.etiquetas.feitoH}}><p>{props.etiquetas.feito}</p></div>

                    </div>
                </div>

                <div className='roda_pe'>

                    <div className='legenda'>
                        <div className='caixa cor_a_fazer'></div>
                        <p>A fazer</p>
                    </div>

                    <div className='legenda'>
                        <div className='caixa cor_fazendo'></div>
                        <p>Fazendo</p>
                    </div>

                    <div className='legenda'>
                        <div className='caixa cor_feito'></div>
                        <p>Feito</p>
                    </div>
                </div>
            </div>
        </div>
    )
}