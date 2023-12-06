import '../../styles/pages/Home/Caixa_Notifcacoes.css';
import { collection, getDocs, where, query, getDoc, doc} from 'firebase/firestore';
import { db } from "../../App";
import { useEffect, useState } from 'react';
import { getFoto } from './Proj_Tare_Re';

export default function CaixaNotificacoes(props){

    return(
        <div className="caixa_notificacoes">
            <h3>Notificações</h3>

            <ul>
                {props.notificacoes.notificacoes.map((notificacao, index)=>{
                    if(index < 10){
                        return(
                            <li id={props.notificacoes.IDnotificacoes[index]} key={props.notificacoes.IDnotificacoes[index]}>
                                 <div className='foto_perfil'>
                                    {notificacao.membros.map((membro)=>{
                                        return (<img key={membro} src={props.notificacoes.mapa.fotosMap.get(membro)}/>)
                                    })}
                                    
                                </div>
                                <p>{notificacao.conteudo}</p>
                            </li>
                        )
                    }
                })}
                
            </ul>

        </div>
    )
}