import '../../styles/pages/Home/Proj_Tare_Re.css';
import { collection, getDocs, where, query, getDoc, doc, orderBy } from 'firebase/firestore';
import { db } from "../../App";
import { useEffect, useState } from 'react';
import { GrTextAlignFull } from "react-icons/gr";
import { PiLinkSimpleBold } from "react-icons/pi";
import { TbCheckupList } from "react-icons/tb";
import { TbClipboardText } from "react-icons/tb";

export const setEtiqueta = (estado)=> {
    let etiqueta = 'transparent';

    if(estado == 'Feito'){
        etiqueta = '#2C7D1F';

    }else if(estado == 'Fazendo'){
        etiqueta = '#181FBD';

    }else if(estado == 'A fazer'){
        etiqueta = '#A91C1C';

    }else{
        etiqueta = 'transparent';
    }

    return etiqueta;
}


export default function ProjetosTarefasRecentes(props){
    return (
        <div className="projetos_tarefas_urgentes">
            <div className="tarefas_urgentes">
                <h3>Tarefas urgentes</h3>

                <div className='container_tarefas_urgentes'>
                    <ul>
                        {props.prop.tarefas.map((tarefa, index)=>{
                            if(index < 4){
                                return(
                                    <li id = {props.prop.IDTarefas[index]} key = {props.prop.IDTarefas[index]}>
                                        <div className='titulo_membros'>
    
                                            <div className='status_tarefa' style={{backgroundColor: setEtiqueta(tarefa.etiqueta)}}></div>
                                            <p>{tarefa.nome}</p>
    
                                        </div>
    
                                        <div className='informaçoes_tarefa'>
                                            <div className='membros_tarefas_urgentes'> 
                                                {tarefa.membros.map((membro, indexMembros)=>{
                                                    if(indexMembros < 2){
                                                        return (<img key={membro} src={props.prop.mapa.fotosMap.get(membro)}/>)
                                                    }
                                                })}

                                                {tarefa.membros.length > 2 ?
                                                    <div className='mais_membros'>+{tarefa.membros.length - 2}</div>
                                                    :
                                                    <div className="none"></div>}
                                                
                                            </div>
    
                                            {tarefa.entrega != undefined ? 
                                                <div className='icon_info' title='Entrega'> <p>{tarefa.entrega}</p> </div>
                                                : 
                                                <div className="none"></div>}
    
                                            {tarefa.carga != undefined ? 
                                                <div className='icon_info' title='Dificuldade'> <p>{tarefa.carga}</p> </div>
                                                : 
                                                <div className="none"></div>}
    
                                            {tarefa.texto != undefined ? 
                                                <div className='icon_info'> <GrTextAlignFull/>  </div>
                                                : 
                                                <div className="none"></div>}
    
                                            {tarefa.anexos != undefined ? 
                                                <div className='icon_info'><PiLinkSimpleBold/> <p>{tarefa.anexos.length}</p></div>
                                                : 
                                                <div className="none"></div>}
    
                                            {tarefa.n_check_list != undefined ? 
                                                <div className='icon_info'><TbCheckupList /> <p> {tarefa.n_check_list.length}/{tarefa.check_list.length}</p> </div>
                                                : 
                                                <div className="none"></div>}
                                        </div>
                                    </li>
                                )
                            }
                            
                        })}  
                    </ul>
                </div>
            </div>

            <div className='projetos_recentes'>
                <h3>Projetos recentes</h3>

                <div className='container_projetos_recentes'>
                    <ul className='projeto_mais_recente'>
                        {props.prop.projetos.map((projeto, index)=>{
                            if(index < 1){
                                return (
                                    <li onClick={(e)=>{props.prop.abrirPageTarefa(props.prop.IDprojetos[index])}} id={props.prop.IDprojetos[index]} key={props.prop.IDprojetos[index]} style={{backgroundImage: `url(${projeto.capa})`}}>
                                        <div className='shadow'></div>
    
                                        <div className='nome_projeto'>
                                            <p>{projeto.nome}</p>
                                        </div>
    
                                        <div className='info_projeto'>
                                            <div className='membros_projeto_urgentes'>  
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
                    
                    <ul className='lista' id='lista'>
                        {props.prop.projetos.map((projeto, index)=>{
                            if(index > 0 && index < 3){
                                return (
                                    <li onClick={(e)=>{props.prop.abrirPageTarefa(props.prop.IDprojetos[index])}} id={props.prop.IDprojetos[index]} key={props.prop.IDprojetos[index]}  style={{backgroundImage: `url(${projeto.capa})`}}>
                                        <div className='shadow'></div>
    
                                        <div className='nome_projeto'>
                                            <p>{projeto.nome}</p>
                                        </div>
    
                                        <div className='info_projeto'>
                                            <div className='membros_projeto_urgentes'>  
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
        </div>
    )
}