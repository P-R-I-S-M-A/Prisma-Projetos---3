import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext({});

export var User;

export function clickSingIn(email, senha){

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
                if(hasUser.email === email && hasUser.password === senha){
                    const token = Math.random().toString(36).substring(2)+Math.random().toString(36).substring(2)+Date.now().toString(36);

                    localStorage.setItem('user_token', JSON.stringify({ token }));

                    const postId = hasUser.id;

                    const dadosAtualizados = {
                        token: token
                    };

                    fetch(`http://localhost:5000/users/${postId}`, {
                    method: 'PATCH',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(dadosAtualizados)
                    })
                    .then((response) => response.json())
                    .then((data) => {
                        if(data){
                            User = true;
                            return '';
                        }
                    })
                    .catch((error) => {
                        alert('Algo deu errado: '+ error)
                        
                    });
                    
                    
                }
                else{
                    return 'Senha incorreta';
                }      
            }
            else{
                return 'Usuário não encontrado';
            }
        });
}

export default function Auth({ children }){
    const [user, setUser] = useState();

    useEffect(()=>{
        const userToken = localStorage.getItem('user_token');

        if(userToken){
            fetch('http://localhost:5000/users')
                .then((response) => response.json())
                .then((data) => {

                    let hasUserToken = [];

                    data?.filter((user) => {

                        if(user.token === JSON.parse(userToken).token){
                            hasUserToken = user;
                        }  
                    })

                    if(hasUserToken){
                        
                    }
                })
        } 
        else{
           
        }
        
    });

    function singout(){
        setUser(null);
        localStorage.removeItem('user_token')
    }

    return(
        <AuthContext.Provider value={{ user, signed: !!null, singout }}>
            {children}
        </AuthContext.Provider>
    );
}