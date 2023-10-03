import { useState } from "react";
import { useNavigate } from "react-router-dom";
import UseAuth from "../hooks/UseAuth";


export default function SingUp(){
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [error, setError] = useState("");

    function btnSingUp(){
        if(!email | !senha){
            setError('preencha todos os campos');
            return;
        }

        fetch('http://localhost:5000/users')
            .then((response) => response.json())
            .then((data) => {

                let hasUser = [];

                data?.filter((user) =>{
                    
                    if(user.email === email){
                        hasUser = user;
                    }   
                })

                if(hasUser != 0){
                    return setError('Já existe uma conta vinculada á esse email')
                }
                
                const newID = Date.now().toString(36) + Math.random().toString(36).substring(2);

                const newUser = {
                    id: newID,
                    email: email,
                    password: senha
                };
  
                  fetch('http://localhost:5000/users', {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(newUser)
                  })
                    .then((response) => response.json())
                    .then((data) => {
                        if(data){
                            navigate('/')
                        }
                    })
                    .catch((error) => {
                        alert('Algo deu errado: '+ error)
                    });
                
                return;
            });
    }

    return(
        <div>
            <h1>Criar conta</h1>

            <input type="email" placeholder="email criar" value={email} onChange={(e)=> [setEmail(e.target.value), setError("")]}/>

            <input type="password" placeholder="senha criar " value={senha} onChange={(e)=> [setSenha(e.target.value), setError("")]}/>

            <p>{error}</p>

            <button onClick={btnSingUp}>Criar</button>

        </div>
    );
}