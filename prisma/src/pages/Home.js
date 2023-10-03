import { useNavigate } from "react-router-dom";
import UseAuth from "../hooks/UseAuth";
import SingOut from "./SingUot";

export default function Home(){

    const navigate = useNavigate();

    return(
        <div>
            <h1>Home</h1>

            <button onClick={SingOut}>sair</button>
        </div>
    );
}