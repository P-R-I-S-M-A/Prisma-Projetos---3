import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { clickSingIn } from "../contexts/Auth";

export var teste;

export default function SingIn(){
    const navigate = useNavigate();
    
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [error, setError] = useState("");

    function btnSingIn(){
        if(!email | !senha){
            setError('preencha todos os campos');
            return;
        }

        const res = clickSingIn(email, senha)

        console.log(res)
    }

    return(
        <div>
            <h1>Login</h1>

            <input type="email" placeholder="email" value={email} onChange={(e)=> [setEmail(e.target.value), setError("")]}/>

            <input type="password" placeholder="senha" value={senha} onChange={(e)=> [setSenha(e.target.value), setError("")]}/>

            <p>{error}</p>

            <button onClick={btnSingIn}>entrar</button>

            <Link to='/singup'>Registre-se</Link>
        </div>
    );
}