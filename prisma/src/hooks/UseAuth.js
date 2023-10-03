import { useContext } from "react";
import { AuthContext } from "../contexts/Auth";

export default function UseAuth(){
    const context = useContext(AuthContext);

    return context;
}