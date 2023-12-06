import '../styles/pages/Tasks.css';
import { BsThreeDots } from "react-icons/bs";
import { IoMdAdd } from "react-icons/io";
import { TbMenuDeep, TbLink } from "react-icons/tb";
import { BiCheckSquare } from "react-icons/bi";
import  Aline  from '../assents/img/aline.jpg';
import  Eva  from '../assents/img/eva.jpg';
import  Erick  from '../assents/img/erick.jpg';
import  Elias  from '../assents/img/elias.jpg';
import { useEffect } from 'react';
import { useState } from 'react';

export default function Tasks(props){
    
    return(
        <div className="tasks">
            <header>
                <div className='menu_tipo'>
                    <div className='tipo'>Kamban</div>
                    <div className='tipo'>Lista</div>
                    <div className='tipo'>Gantt</div>
                </div>
            </header>

            <main>
                <h3>Nome do Projeto </h3>

                <div className='container_cards'>
                    {props.prop.cards.map((card, index)=>{
                        return(
                            <div className='card' key={props.prop.mapa.IDtodosCardsMap.get(props.prop.projetoAtual)[index]} id={props.prop.mapa.IDtodosCardsMap.get(props.prop.projetoAtual)[index]}>
                               
                                <h3>{card.nome_card}</h3>
                                <ul>
                                    {props.prop.mapa.cardComTarefasMap.get(props.prop.mapa.IDtodosCardsMap.get(props.prop.projetoAtual)[index]).map(doc=>{
                                        return(
                                            <li></li>
                                        )
                                    })}
                                  
                                    
                                   
                                </ul>
                            </div>
                        )
                    })}
                    
                    <button><div className='aux'><IoMdAdd className='icon'/> Adicionar card</div></button>
                </div>
            </main>
        </div>
    )
}