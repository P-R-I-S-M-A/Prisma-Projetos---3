import { useState } from 'react';
import '../../styles/pages/Projects/Btn_Criar_Pro.css';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { storage } from '../../App';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { db } from "../../App";
import { IoIosClose } from "react-icons/io";
import { MdPhoto } from "react-icons/md";
import { LuSend } from "react-icons/lu";
import { Link, useNavigate } from 'react-router-dom';
import Loading from '../../components/Loading';


export default function CriarProjeto(props){
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [nomeProjeto, setNomeProjeto] = useState('');
    const [dataEntrega, setDataEntrega] = useState('');
    const [tempoRestante, setTempoRestante] = useState('');
    const [arquivoSelecionado, setArquivoSelecionado] = useState(null);
    const [file, setFile] = useState(null);
  
    const [emailConvinte, setEmailConvinte] = useState('')
    const [error, setError] = useState("");

    const mostrarCapaNaTela = (event) => {
        const arquivo = event.target.files[0];

        if (event.target.files.length > 0) {
            setFile(event.target.files[0]);
        }
    
        if (arquivo) {
          const leitor = new FileReader();
    
          leitor.onload = (e) => {
            // Atualiza o estado com o arquivo selecionado
            setArquivoSelecionado({
              nome: arquivo.name,
              tipo: arquivo.type,
              tamanho: arquivo.size,
              conteudo: e.target.result,
            });
          };
    
          // Lê o conteúdo do arquivo como URL ou texto, dependendo do tipo
          if (arquivo.type.startsWith('image')) {
            leitor.readAsDataURL(arquivo);
          } else {
            leitor.readAsText(arquivo);
          }
        } else {
          // Limpa o estado se nenhum arquivo for selecionado
          setArquivoSelecionado(null);
        }
    }

    const calcularTempoRestante = (data)=>{
        const dataHoraCompleta = data;
        const apenasData = dataHoraCompleta.split('T')[0];
  
        // Cria um objeto Date com a data escolhida
        var data = new Date(apenasData + "T00:00:00"); // Adiciona o tempo para garantir a interpretação correta
  
        // Obtém ano, mês e dia
        var ano = data.getFullYear();
        var mes = ("0" + (data.getMonth() + 1)).slice(-2); // Adiciona 1 ao mês, pois os meses começam do zero
        var dia = ("0" + data.getDate()).slice(-2);
  
        // Cria um objeto Date para a data alvo
        const dataAlvo = new Date(ano, mes - 1, dia);
  
        // Obtém a data atual
        const dataAtual = new Date();
      
        // Calcula a diferença em milissegundos
        const diferencaEmMilissegundos = dataAlvo - dataAtual;
      
        // Calcula os dias, horas, minutos e segundos restantes
        const diasRestantes = Math.floor(diferencaEmMilissegundos / (1000 * 60 * 60 * 24));
        const horasRestantes = Math.floor((diferencaEmMilissegundos % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutosRestantes = Math.floor((diferencaEmMilissegundos % (1000 * 60 * 60)) / (1000 * 60));
        const segundosRestantes = Math.floor((diferencaEmMilissegundos % (1000 * 60)) / 1000);
        
        setTempoRestante(`${diasRestantes}${horasRestantes}${minutosRestantes}${segundosRestantes}`);
    }

    const tratarData = (data)=>{
        // Criar um objeto Date a partir da string de data e hora
        const dataHoraObjeto = new Date(data);

        // Obter componentes de data
        const dia = dataHoraObjeto.getDate();
        const mes = dataHoraObjeto.getMonth() + 1; // Mês é baseado em zero, então adicionamos 1
        const ano = dataHoraObjeto.getFullYear();

        // Formatar a data no formato desejado (DD/MM/YYYY)
        setDataEntrega(`${dia}/${mes}/${ano}`);
    }

    const setNovoProjeto = async (e) => {
        e.preventDefault();

        setLoading(true);
        
        var downloadURL = '';
        
        if (file) {
            const storageRef = ref(storage, 'capa_usuario/' + file.name);
            await uploadBytes(storageRef, file);

            // Obtenha a URL de download após o upload
            const url = await getDownloadURL(ref(storage, 'capa_usuario/' + file.name));
        
            downloadURL = url;
        }

        const newProjeto = {
            nome: nomeProjeto,
            entrega: dataEntrega,
            membros: [props.IDuser],
            user_id: props.IDuser,
            capa: downloadURL,
            tempo_estante: tempoRestante,
            data_criacao: Date.now(),
            ultimo_acesso: Date.now(),
        }

        const addprojeto = await addDoc(collection(db, 'projetos'), newProjeto);



        const card_fazendo ={
          nome_card: 'A fazer',
          projeto_id: addprojeto.id,
          data_criacao: Date.now()
        }

        const card_feito ={
          nome_card: 'Fazendo',
          projeto_id: addprojeto.id,
          data_criacao: Date.now()
        }
        
        const card_a_fazer ={
          nome_card: 'Feito',
          projeto_id: addprojeto.id,
          data_criacao: Date.now()
        }

        await addDoc(collection(db, 'cards'), card_a_fazer);
        await addDoc(collection(db, 'cards'), card_fazendo);
        await addDoc(collection(db, 'cards'), card_feito);
        
        props.getProjetosTodos(props.IDuser)
        props.getProjetosRecentes(props.IDuser)
        btnFecharCriarProjeto();

        setLoading(false);
    };

    const btnFecharCriarProjeto = ()=>{
        document.querySelector('.criar_projeto').style.display = 'none';
        limparFormulario();
        setArquivoSelecionado(null)
    }

    const dataAtual = new Date().toISOString().split('T')[0];

    function limparFormulario() {
        // Obter o formulário
        var formulario = document.querySelector('.container_criar_pro form');
  
        // Iterar sobre os elementos do formulário e redefinir seus valores
        for (var i = 0; i < formulario.elements.length; i++) {
          var elemento = formulario.elements[i];
  
          // Verificar o tipo do elemento
          switch (elemento.type) {
            case 'text':
            case 'datetime-local':
            case 'file':
            case 'email':
              elemento.value = '';  // Definir o valor como vazio
              break;
            default:
              // Não fazer nada para outros tipos de elementos
              break;
          }
        }
      }
   

    return(
        <div className='criar_projeto'>
            <div className='container_criar_pro' >
                
                <div className='btn_fechar' onClick={btnFecharCriarProjeto}><IoIosClose /></div>

                <h3>Criar novo projeto</h3>
                <Link className='li' title='Home' to='/home/tasks' >teste</Link>

                <div className='img_capa'>
                    {arquivoSelecionado ? (
                        <div className='img'>
                        {arquivoSelecionado.tipo.startsWith('image') ? (
                            <img src={arquivoSelecionado.conteudo} alt="Preview do arquivo" />
                        ) : (
                            <MdPhoto />
                        )}
                        </div>
                    ):
                        <MdPhoto />
                    }
                </div>

                <form>
                    <p>Nome do projeto*</p>
                    <input type='text' required onChange={(e)=> [setNomeProjeto(e.target.value), setError("")]}/>

                    <p>Data de entrega*</p>
                    <input id='dataEscolhida' type="datetime-local" required min={dataAtual} onChange={(e)=> [setError(""), calcularTempoRestante(e.target.value), tratarData(e.target.value)]}/>
                    
                    <input type="file" id="meuInputFile" className="input-file" accept="image/*" onChange={mostrarCapaNaTela}/>
                    <label htmlFor="meuInputFile" className="input-file-label"><MdPhoto className='icon_file'/> Escolher capa</label>

                    <p>Adicionar membros  &#40;você é o membro proprietário&#41;</p>
                    <input type='email' placeholder='Email do membro'onChange={(e)=> [setEmailConvinte(e.target.value), setError("")]}/>
                    <div className='enviar_convite'><LuSend/></div>

                    <div className='btn_criar'>
                        <div onClick={setNovoProjeto}>

                        {loading === true ?  <Loading width={'20px'}/> : <>Criar projeto</>}
                            
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}