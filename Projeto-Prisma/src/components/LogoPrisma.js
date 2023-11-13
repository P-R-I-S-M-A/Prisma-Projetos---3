import  logoPrima  from '../assents/img/logo.png';
import '../styles/components/LogoPrisma.css';

export default function LogoPrima(){

    return(
        <p className="logo">
            <img src={logoPrima} alt="logo"/>
            PRISMA
        </p>
    ) 
}