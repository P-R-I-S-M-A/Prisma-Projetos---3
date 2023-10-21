import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../App";
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { TbUser, TbLock, TbLockCheck, TbMail } from "react-icons/tb";
import InputSing from "../components/InputSing";
import ButtonSing from "../components/ButtonSing";
import LogoPrima from "../components/LogoPrisma";
import '../styles/auth/LoginLogout.css';
import Loading from "../components/Loading";


export default function SingUp(){
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [senhaRep, setSenhaRep] = useState("");
    const [erro, setErro] = useState("");
    const [loading, setLoading] = useState(false);
    

    const handleRegistration = async () => {
        if(!email | !senha | !senhaRep){
            setErro('Preencha todos os campos');
            return;
        }
        if(senha != senhaRep){
            setErro('As senhas não coincidem');
            return;
        }

        setLoading(true);

        try {
          const userCredential = await createUserWithEmailAndPassword(auth, email, senha);
          const user = userCredential.user;
          navigate('/')

        } catch (error) {
            setLoading(false)
            
            switch (error.code) {
                
                case 'auth/email-already-in-use':
                    return setErro('Este endereço de e-mail já está em uso.');
                case 'auth/invalid-email':
                    return setErro('Endereço de e-mail inválido.');
                case 'auth/weak-password':
                    return setErro('A senha deve ter pelo menos 6 caracteres.');
                default:
                    return setErro('Ocorreu um erro durante a criação da conta.');
              }
              
        }

        setLoading(false)
      };
      
    return(
        <div className="login-logout">

            <LogoPrima/>

            <div className="form">
                <h1>Crie sua conta</h1>

                <InputSing icon={<TbUser/>} type = {'text'} placeholder={'Nome'} value={email}/>

                <InputSing icon={<TbMail/>} type={'email'} placeholder={'Email'} value={email} onChange={(e)=> [setEmail(e.target.value), setErro("")]}/>

                <InputSing icon={<TbLock/>} type={'password'} placeholder={'Crie uma senha'} value={senha} onChange={(e)=> [setSenha(e.target.value), setErro("")]}/>

                <InputSing icon={<TbLockCheck/>} type={'password'} placeholder={'Confirme sua senha'} value={senhaRep} onChange={(e)=> [setSenhaRep(e.target.value), setErro("")]}/>

                <p className="error">{erro}</p>

                <ButtonSing onClick={handleRegistration} text={'Criar conta'}/>

                <span>Já tem uma conta? <Link className="link" to='/login'>Entre em sua conta</Link></span>
            </div>

            {loading == true ?  <Loading/> : <></>}

        </div>
    );
}