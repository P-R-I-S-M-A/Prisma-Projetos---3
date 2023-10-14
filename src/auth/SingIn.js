import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../App";
import { signInWithEmailAndPassword } from "firebase/auth";
import { TbUser, TbLock } from "react-icons/tb";
import InputSing from "../components/InputSing";
import ButtonSing from "../components/ButtonSing";
import LogoPrima from "../components/LogoPrisma";
import '../styles/auth/LoginLogout.css';

export default function SingIn(props){
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [error, setError] = useState("");
    
    const handleLogin = async () => {
        if(!email | !senha){
            setError('Preencha todos os campos');
            return;
        }

        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, senha);
            const user = userCredential.user;
            navigate('/home')
            
        } catch (error) {
            console.log(error.code)
            switch (error.code) {
                case 'auth/invalid-login-credentials':
                    return setError('Email ou senha incorreto.');
                default:
                    return setError('Ocorreu um erro ao entrar na conta.');
            }
        }
    }

    return(
        <div className="login-logout">

            <LogoPrima/>

            <div className="form">
                <h1>Acesse sua conta</h1>

                <InputSing icon={<TbUser/>} type={'email'} placeholder={'Email'} value={email} onChange={(e)=> [setEmail(e.target.value), setError("")]}/>

                <InputSing icon={<TbLock/>} type={'password'} placeholder={'Senha'} value={senha} onChange={(e)=> [setSenha(e.target.value), setError("")]}/>

                <p className="error">{error}</p>

                <ButtonSing onClick={handleLogin} text={'Entrar'}></ButtonSing>

                <span>Não tem uma conta? <Link className="link" to='/singup'>Registre-se</Link></span>
            </div>

        </div>
    );
}