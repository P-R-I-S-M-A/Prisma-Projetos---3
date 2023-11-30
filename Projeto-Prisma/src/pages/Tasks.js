import '../styles/pages/Tasks.css';
import { BsThreeDots } from "react-icons/bs";
import { IoMdAdd } from "react-icons/io";
import { TbMenuDeep, TbLink } from "react-icons/tb";
import { BiCheckSquare } from "react-icons/bi";
import  Aline  from '../assents/img/aline.jpg';
import  Eva  from '../assents/img/eva.jpg';
import  Erick  from '../assents/img/erick.jpg';
import  Elias  from '../assents/img/elias.jpg';
export default function Tasks(){
    return(
        <div className="tarefas">
           <header>
                <div className='container-type'>
                    <div className='type'>Kamban</div>
                    <div className='type'>Lista</div>
                    <div className='type'>Gantt</div>
                </div>
           </header>

           <div className='nome_projeto'>
                <h1>Projeto Prisma</h1>
           </div>

           <div className='container_cards'>

                <div className='card'>
                    <p>Aline (CEO - Dev Back-end) <BsThreeDots/></p>

                    <ul>

                        <li>
                            <p>Verificação de viabilidade <div><img src={Aline}/></div></p>
                            <div className='info'>
                                <div className='estado'><p style={{color:'rgb(16, 255, 124) '}}>feito</p></div>
                                <p className='p_check'><BiCheckSquare className='icon check'/>2/2</p>
                                <div className='data'><p>Entrega: 04/09</p></div>
                            </div>
                        </li>

                        <li>
                            <p>Planejamento inicial <div><img src={Aline}/></div></p>
                            <div className='info'>
                                <div className='estado'><p style={{color:'rgb(16, 255, 124) '}}>feito</p></div>

                                <p className='p_check'><BiCheckSquare className='icon check'/>2/2</p>
                                <div className='data'><p>Entrega: 19/09</p></div>
                            </div>
                        </li>


                        <li>
                            <p>Elaborar proposta do projeto <div><img src={Aline}/></div></p>
                            <div className='info'>
                                <div className='estado'><p style={{color:'rgb(16, 255, 124) '}}>feito</p></div>
                                <TbMenuDeep className='icon'/>
                                <p className='p_check'><BiCheckSquare className='icon check'/>2/2</p>
                                <div className='data'><p>Entrega: 25/09</p></div>
                            </div>
                        </li>

                        <li>
                            <p>Elaborar Slides para o pitch <div><img src={Aline}/></div></p>
                            <div className='info'>
                                <div className='estado'><p>Fazendo</p></div>
                                <TbMenuDeep className='icon'/>
                                <TbLink className='icon'/>
                                <p className='p_check'><BiCheckSquare className='icon check'/>2/2</p>
                                <div className='data'><p>Entrega: 12/12</p></div>
                            </div>
                        </li>

                    
                    </ul>
                </div>

                <div className='card'>
                    <p>Eva (Analista - UX/UI) <BsThreeDots/></p>

                    <ul>
                        <li>
                            <p>Criar um documento com as perguntas a serem feitas na entrevista <div><img src={Eva}/></div></p>
                            <div className='info'>
                                <div className='estado'><p style={{color:'rgb(16, 255, 124) '}}>feito</p></div>
                                <TbMenuDeep className='icon'/>
                                <TbLink className='icon'/>
                                <p className='p_check'><BiCheckSquare className='icon check'/>2/2</p>
                                <div className='data'><p>Entrega: 19/09</p></div>
                            </div>
                        </li>

                        <li>
                            <p>Elaborar perguntas para a entrevista <div><img src={Eva}/></div></p>
                            <div className='info'>
                                <div className='estado'><p style={{color:'rgb(16, 255, 124) '}}>feito</p></div>
                                <p className='p_check'><BiCheckSquare className='icon check'/>2/2</p>
                                <div className='data'><p>Entrega: 08/10</p></div>
                            </div>
                        </li>

                        <li>
                            <p>Criar um documento para Histórias de usuário. <div><img src={Eva}/></div></p>
                            <div className='info'>
                                <div className='estado'><p style={{color:'rgb(16, 255, 124) '}}>feito</p></div>

                                <p className='p_check'><BiCheckSquare className='icon check'/>2/2</p>
                                <div className='data'><p>Entrega: 10/10</p></div>
                            </div>
                        </li>


                        <li>
                            <p>Elaborar Histórias de usuário <div><img src={Eva}/></div></p>
                            <div className='info'>
                                <div className='estado'><p style={{color:'rgb(16, 255, 124) '}}>feito</p></div>
                                <TbMenuDeep className='icon'/>
                                <p className='p_check'><BiCheckSquare className='icon check'/>2/2</p>
                                <div className='data'><p>Entrega: 14/10</p></div>
                            </div>
                        </li>

                        <li>
                            <p>Criação das imagens para divulgação do teste de fumaça <div><img src={Eva}/></div></p>
                            <div className='info'>
                                <div className='estado'><p>Fazendo</p></div>
                                <TbMenuDeep className='icon'/>
                                <TbLink className='icon'/>
                                <p className='p_check'><BiCheckSquare className='icon check'/>2/2</p>
                                <div className='data'><p>Entrega: 07/11</p></div>
                            </div>
                        </li>

                    
                    </ul>
                </div>
                

                <div className='card'>
                    <p>Erick (Dev Front-end) <BsThreeDots/></p>

                    <ul>
                        <li>
                            <p>Selecionar ferramentas para a criação do Front-End <div><img src={Erick}/></div></p>
                            <div className='info'>
                                <div className='estado'><p style={{color:'rgb(16, 255, 124) '}}>feito</p></div>
                                <TbMenuDeep className='icon'/>
                                <p className='p_check'><BiCheckSquare className='icon check'/>2/2</p>
                                <div className='data'><p>Entrega: 24/09</p></div>
                            </div>
                        </li>

                        <li>
                            <p>Análise e documentação do modelo de negócios Canvas <div><img src={Erick}/><img src={Elias}/></div></p>
                            <div className='info'>
                                <div className='estado'><p style={{color:'rgb(16, 255, 124) '}}>feito</p></div>
                                <p className='p_check'><BiCheckSquare className='icon check'/>2/2</p>
                                <div className='data'><p>Entrega: 30/09</p></div>
                            </div>
                        </li>

                        <li>
                            <p>Instalar Node.js e criar o projeto em React no VS code <div><img src={Erick}/></div></p>
                            <div className='info'>
                                <div className='estado'><p style={{color:'rgb(16, 255, 124) '}}>feito</p></div>

                                <p className='p_check'><BiCheckSquare className='icon check'/>2/2</p>
                                <div className='data'><p>Entrega: 10/10</p></div>
                            </div>
                        </li>


                        <li>
                            <p>Desenvolvimento das páginas de Login e Criação de conta <div><img src={Erick}/></div></p>
                            <div className='info'>
                                <div className='estado'><p>Fazendo</p></div>
                                <TbMenuDeep className='icon'/>
                                <p className='p_check'><BiCheckSquare className='icon check'/>2/2</p>
                                <div className='data'><p>Entrega: 14/10</p></div>
                            </div>
                        </li>

                        <li>
                            <p>Desenvolvimento do site para o teste de fumaça<div><img src={Erick}/><img src={Elias}/></div></p>
                            <div className='info'>
                            <div className='estado'><p style={{color:'yellow'}}>A fazer</p></div>

                                <TbMenuDeep className='icon'/>
                                <TbLink className='icon'/>
                                <p className='p_check'><BiCheckSquare className='icon check'/>2/2</p>
                                <div className='data'><p>Entrega: 07/11</p></div>
                            </div>
                        </li>

                    
                    </ul>
                </div>

                

                <div className='card mais'>
                    <p className='add'><IoMdAdd />Adionar nova tarefa</p>
                </div>

  


           </div>
        </div>
    )
}