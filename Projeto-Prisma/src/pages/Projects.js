import { useEffect, useState } from 'react';
import Loading from '../components/Loading';
import '../styles/pages/Projects.css';
import Storage from '../components/Storage';
import { getDocs, query, collection, where, getDoc, doc } from 'firebase/firestore';
import { db } from "../App";
import { TbClipboardText } from "react-icons/tb";
import { IoMdAdd } from "react-icons/io";
import { useNavigate } from 'react-router-dom';


export default function Projects(props){

    const navigate = useNavigate();

    const btnAbrirCriarProjeto = ()=>{
        document.querySelector('.criar_projeto').style.display = 'block';
    }


    return(
        <div className="projects">
            <div className='header'>
               
                <button onClick={btnAbrirCriarProjeto}><IoMdAdd className='icon'/>Novo projeto</button>

            </div>
            <div className='main'>
                <div className='projetos_recentes'>
                    <h3>Acessados recentemente</h3>

                    <div className='container_p_recente'>
                        <ul>
                            {props.prop.projetos.map((projeto, index)=>{
                                if(index < 4){
                                    return(
                                        <li onClick={(e)=>{props.prop.abrirPageTarefa(props.prop.IDprojetos[index])}} id={props.prop.IDprojetos[index]} key={props.prop.IDprojetos[index]}  style={{backgroundImage: `url(${projeto.capa})`}}>
                                            <div className='shadow'></div>
    
                                            <div className='nome_projeto'>
                                                <p>{projeto.nome}</p>
                                            </div>
    
                                            <div className='info_projeto'>
                                                <div className='membros_projeto'>
                                                    {projeto.membros.map((membro, indexMembros)=>{
                                                        if(indexMembros < 2){
                                                            return (<img key={membro} src={props.prop.mapa.fotosMap.get(membro)}/>)
                                                        }
                                                    })}
    
                                                    {projeto.membros.length > 2 ?
                                                        <div className='mais_membros'>+{projeto.membros.length - 2}</div>
                                                        :
                                                        <div className="none"></div>}
                                                </div>
    
                                                {projeto.entrega != undefined ? 
                                                    <div className='icon_info' title='Entrega'> <p>{projeto.entrega}</p> </div>
                                                    : 
                                                    <div className="none"></div>}
                                                
                                                <div className='icon_info' title='Entrega'>
                                                    <TbClipboardText/>
                                                    <p>{props.prop.mapa.totalTarefasMap.get(props.prop.IDprojetos[index])}</p> 
                                                </div>
                                            </div>
                                        </li>
                                    )
                                }
                            })}
                        </ul>
                    </div>

                </div>

                <div className='todos_projetos'>
                    <h3>Todos os projetos</h3>

                    <div className='container_p_recente container_p_t'>
                        <ul>
                            {props.prop.projetosT.map((projeto, index)=>{
                               
                                return(
                                    <li onClick={(e)=>{props.prop.abrirPageTarefa(props.prop.IDprojetosT[index])}} id={props.prop.IDprojetosT[index]} key={props.prop.IDprojetosT[index]} style={{backgroundImage: `url(${projeto.capa})`}}>
                                        <div className='shadow'></div>

                                        <div className='nome_projeto'>
                                            <p>{projeto.nome}</p>
                                        </div>

                                        <div className='info_projeto'>
                                            <div className='membros_projeto'>
                                                {projeto.membros.map((membro, indexMembros)=>{
                                                    if(indexMembros < 2){
                                                        return (<img key={membro} src={props.prop.mapa.fotosMap.get(membro)}/>)
                                                    }
                                                })}

                                                {projeto.membros.length > 2 ?
                                                    <div className='mais_membros'>+{projeto.membros.length - 2}</div>
                                                    :
                                                    <div className="none"></div>}
                                            </div>

                                            {projeto.entrega != undefined ? 
                                                <div className='icon_info' title='Entrega'> <p>{projeto.entrega}</p> </div>
                                                : 
                                                <div className="none"></div>}
                                            
                                            <div className='icon_info' title='Entrega'>
                                                <TbClipboardText/>
                                                <p>{props.prop.mapa.totalTarefasMap.get(props.prop.IDprojetosT[index])}</p> 
                                            </div>
                                        </div>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}