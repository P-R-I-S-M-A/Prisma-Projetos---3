import { auth } from "../App";
import { signOut } from "firebase/auth";


export default function SingOut(){

    return signOut(auth)
        .then(() => {
            console.log('desconectado')
        // O usuário foi desconectado
        })
        
        .catch((error) => {
            alert('Não foi possivel sair da conta: ', error)
        });
}