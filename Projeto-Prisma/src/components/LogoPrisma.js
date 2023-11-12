import  logoPrima  from '../assents/img/prisma_branco_v2.png';
import '../styles/components/LogoPrisma.css';

export default function LogoPrima(){

    return(
        <p className="logo">
            <img src={logoPrima} alt="logo"/>
            PRISMA
        </p>
    ) 
}