import '../../styles/pages/Home/Proj_Tare_Re.css';
import { collection, getDocs, where, query, getDoc, doc, orderBy } from 'firebase/firestore';
import { db } from "../../App";
import Erick from '../../assents/img/erick.jpg';
import Elias from '../../assents/img/elias.jpg'
import { TbLink } from "react-icons/tb";
import { HiOutlineMenuAlt2, HiOutlineClipboardList } from "react-icons/hi";
import { useEffect, useState } from 'react';
import { createElement } from 'react';


export default function ProjetosTarefasRecentes(props){

    const [icons, setIcons] = useState()
    var contador_n = 0;

    useEffect(()=>{
        if(props.ID_usuario_FB !== undefined){

            getTarefasUrgentes(props.ID_usuario_FB)
            getProjetosRecentes(props.ID_usuario_FB)

        }
    },[props.ID_usuario_FB]);

    const getIcons = async () =>{

        return new Promise( async (resolve, reject) => {
            try{
                const querySnapshot = await getDoc(doc(db, 'icons', 'PZRtKYohTvsbbu1YwuIP'))
    
                resolve(querySnapshot.data())
    
            }catch (error){
                console.error('Erro ao recuperar documentos: ', error);
    
            }
        });

    }


    const getFoto = async (id) =>{

        return new Promise( async (resolve, reject) => {
            try{
                const querySnapshot = await getDoc(doc(db, 'users', id))
    
                resolve(querySnapshot.data().foto)
    
            }catch (error){
                console.error('Erro ao recuperar documentos: ', error);
    
            }
        });
    }

    const getMembros = (doc, div)=> {
        

        if((doc.data().membros.length > 2) && (doc.data().membros.length - 2) > 0){

            let mais_membros = document.createElement('div');

            mais_membros.className = 'mais_membros';

            mais_membros.innerHTML =  `+${doc.data().membros.length - 2}` ;

            div.appendChild(mais_membros)
        }

        doc.data().membros.forEach( async (element, indice)=>{
            if(indice < 2){
                let img = document.createElement('img');

                let primeiroFilho = div.firstChild;

                img.src = await getFoto(element)

                div.insertBefore(img, primeiroFilho)
            }            
        })
    }


    const getTarefasUrgentes = async (id) => {

        function setEtiqueta(estado){
            let etiqueta = 'transparent';

            if(estado == 'Feito'){
                etiqueta = 'green';

            }else if(estado == 'Fazendo'){
                etiqueta = 'blue';

            }else if(estado == 'A fazer'){
                etiqueta = 'red';

            }else{
                etiqueta = 'transparent';
            }

            return etiqueta;
        }

        let icons = await getIcons();

        try {
            const querySnapshot = await getDocs(query(collection(db, 'tarefas'), where("membros", "array-contains", id), orderBy('carga')));
            let ul_container_tarefas_urgentes = document.querySelector('.container_tarefas_urgentes ul');
            let contador = 0;
            ul_container_tarefas_urgentes.innerHTML = ``;

            querySnapshot.forEach( (doc) => {

                if (contador < 4) {

                    let li = document.createElement('li');

                    li.id = doc.id;

                    li.innerHTML = 
                        `<div class='titulo_membros'>

                            <div class='status_tarefa' style="background-color: ${setEtiqueta(doc.data().etiqueta)};"></div>
                            <p>${doc.data().nome}</p>

                        </div>

                        <div class='informaçoes_tarefa'>
                            <div class='membros_tarefas_urgentes'>  </div>

                            ${doc.data().entrega != undefined ? 
                                `<div class='icon_info' title='Entrega'> <p>${doc.data().entrega}</p> </div>` 
                                : 
                                `<div class="none"></div>`}

                            ${doc.data().carga != undefined ? 
                                `<div class='icon_info' title='Dificuldade'> <p>${doc.data().carga}</p> </div>` 
                                : 
                                `<div class="none"></div>`}
                            
                            ${doc.data().texto != undefined ? 
                                `<div class='icon_info'> <img src=${icons.descricao}/>   </div>` 
                                : 
                                `<div class="none"></div>`}

                            ${doc.data().anexos != undefined ? 
                                `<div class='icon_info'> <img src=${icons.link}/><p>${doc.data().anexos.length}</p></div>` 
                                : 
                                `<div class="none"></div>`}
                            
                            ${doc.data().n_check_list != undefined ? 
                                `<div class='icon_info'> <img src=${icons.checklist}/><p> ${doc.data().n_check_list.length}/${doc.data().check_list.length}</p> </div>` 
                                : 
                                `<div class="none"></div>`}

                        </div>`
                    

                    ul_container_tarefas_urgentes.appendChild(li);
                            
                    let membros_tarefas_urgentes = document.querySelector('#'+doc.id+' .membros_tarefas_urgentes');

                    getMembros(doc, membros_tarefas_urgentes );
                    
                    contador++;
                }

                
            
            });

        } catch (error) {

            console.error('Erro ao recuperar documentos: ', error);

        }

    }

    const getProjetosRecentes = async (id) => {

        contador_n++;

        if(contador_n < 2){

            try{
                const querySnapshot = await getDocs(query(collection(db, 'projetos'), where("membros", "array-contains", id)));
                
                let ul_container_projetos_recentes_projeto_mais_recente = document.querySelector('.container_projetos_recentes ul.projeto_mais_recente');
                let ul_container_projetos_recentes_lista = document.querySelector('.container_projetos_recentes #lista');
                let contador_lista = 0;
                let contador_p_recente = 0;
                let icons = await getIcons();
                
                ul_container_projetos_recentes_projeto_mais_recente.innerHTML = ``;
                ul_container_projetos_recentes_lista.innerHTML = ``;
            
                querySnapshot.forEach( async (doc)=>{
    
                    let contador_tarefas = 0;
                    const querySnapshot_tarefas = await getDocs(query(collection(db, 'tarefas'), where("projeto_id", "==", doc.id)));
    
                    querySnapshot_tarefas.forEach((doc)=>{
                        doc.data().membros.forEach((el)=>{
                            if(el == id){
                                contador_tarefas++;
                            }
                        })
                    })
    
                    if(contador_p_recente == 0){
                        let li_projeto_mais_recente = document.createElement('li');
    
                        li_projeto_mais_recente.id = doc.id;
                        li_projeto_mais_recente.style.backgroundImage = `url('${doc.data().capa}')`;
                        li_projeto_mais_recente.innerHTML = `
    
                            <div class='shadow'></div>
    
                            <div class='nome_projeto'>
                                <p>${doc.data().nome}</p>
                            </div>
        
                            <div class='info_projeto'>
                                <div class='membros_projeto_urgentes'>  </div>
    
                                ${doc.data().entrega != undefined ? 
                                    `<div class='icon_info' title='Entrega'> <p>${doc.data().entrega}</p> </div>` 
                                    : 
                                    `<div class="none"></div>`}
                                
                                <div class='icon_info' title='Entrega'><img class="icon_img" src=${icons.tarefas}/> <p>${contador_tarefas}</p> </div>
    
                            </div>
                        `
                
                        ul_container_projetos_recentes_projeto_mais_recente.appendChild(li_projeto_mais_recente);
                                
                        let membros_projeto_urgentes = document.querySelector('#'+doc.id+' .membros_projeto_urgentes');
    
                        getMembros(doc, membros_projeto_urgentes);
    
                        
                    }
                    contador_p_recente++;
    
                    if((contador_lista > 0) && (contador_lista < 3)){
    
                        let li_lista = document.createElement('li');
    
                        li_lista.id = doc.id;
                        li_lista.style.backgroundImage = `url('${doc.data().capa}')`;
                        li_lista.innerHTML = `
    
                            <div class='shadow'></div>
    
                            <div class='nome_projeto'>
                                <p>${doc.data().nome}</p>
                            </div>
    
                            <div class='info_projeto'>
                                <div class='membros_projeto_urgentes'>  </div>
    
                                ${doc.data().entrega != undefined ? 
                                    `<div class='icon_info' title='Entrega'> <p>${doc.data().entrega}</p> </div>` 
                                    : 
                                    `<div class="none"></div>`}
                                
                                <div class='icon_info' title='Entrega'><img class="icon_img" src=${icons.tarefas}/> <p>${contador_tarefas}</p> </div>
    
                            </div>
                        `
                        
                        ul_container_projetos_recentes_lista.appendChild(li_lista);
    
                        let membros_projeto_urgentes = document.querySelector('#'+doc.id+' .membros_projeto_urgentes');
    
                        getMembros(doc, membros_projeto_urgentes);
                        
                    }
                    contador_lista++;
      
                });
    
            }catch(error){
                console.error('Erro ao recuperar documentos: ', error);
            }
        } 
    }


    return (
        <div className="projetos_tarefas_urgentes">
            <div className="tarefas_urgentes">
                <h3>Tarefas urgentes</h3>

                <div className='container_tarefas_urgentes'>
                    <ul>
                       
                    </ul>
                </div>
            </div>

            <div className='projetos_recentes'>
                <h3>Projetos recentes</h3>

                <div className='container_projetos_recentes'>
                    <ul className='projeto_mais_recente'>
                        
                    </ul>
                    
                    <ul className='lista' id='lista'>

                    </ul>
                </div>
            </div>
        </div>
    )
}