import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, db } from "../App";
import { signInWithEmailAndPassword } from "firebase/auth";
import { collection, getDocs } from 'firebase/firestore';

import { TbMail, TbLock } from "react-icons/tb";
import InputSing from "../components/InputSing";
import ButtonSing from "../components/ButtonSing";
import LogoPrima from "../components/LogoPrisma";
import '../styles/auth/LoginLogout.css';
import Loading from "../components/Loading";


export default function SingIn(props){
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const getUsersByAge = async (uid) => {

        setLoading(true);

        try {
          const querySnapshot = await getDocs(collection(db, 'Users'));
          querySnapshot.forEach((doc) => {
            const userData = doc.data();
            if (userData.uid === uid) {
              console.log('ID do documento:', doc.id);
              console.log('Dados do documento:', userData.projetos.projeto01.projetoID);
            }
          });
        } catch (error) {
          console.error('Erro ao recuperar documentos: ', error);
        }

        setLoading(false);
      }
      
    
    const handleLogin = async () => {
        if(!email | !senha){
            setError('Preencha todos os campos');
            return;
        }

        setLoading(true);

        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, senha);
            const user = userCredential.user;

            getUsersByAge(user.uid);

            navigate('/home')
            
        } catch (error) {
            setLoading(false);
            
            switch (error.code) {
                case 'auth/invalid-login-credentials':
                    return setError('Email ou senha incorreto.');
                default:
                    return setError('Ocorreu um erro ao entrar na conta.');
            }
        }

        setLoading(false);
    }

    return(
        <div className="login-logout">

            <LogoPrima/>

            <div className="form">
                <h1>Acesse sua conta</h1>

                <InputSing icon={<TbMail/>} type={'email'} placeholder={'Email'} value={email} onChange={(e)=> [setEmail(e.target.value), setError("")]}/>

                <InputSing icon={<TbLock/>} type={'password'} placeholder={'Senha'} value={senha} onChange={(e)=> [setSenha(e.target.value), setError("")]}/>

                <p className="error">{error}</p>

                <ButtonSing onClick={handleLogin} text={'Entrar'}></ButtonSing>

                <span>Não tem uma conta? <Link className="link" to='/singup'>Registre-se</Link></span>
            </div>

            {loading == true ?  <Loading/> : <></>}
        </div>
    );
}