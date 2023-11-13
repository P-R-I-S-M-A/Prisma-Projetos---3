import { useEffect, useState } from 'react';
import { getDoc, doc } from 'firebase/firestore';
import { db } from "../App";
import Loading from '../components/Loading';
import '../styles/pages/Projects.css';

export default function Projects(props){

    const [user, setUser] = useState([]);
    const [loading, setLoading] = useState(false);

    
    useEffect(()=>{

        if(props.userId != ''){
            getUserHome(props.userId)
        }

    },[props.userId])

    const getUserHome = async (id) => {

        setLoading(true);
  
        try {

            const querySnapshot = await getDoc(doc(db, 'users', id))
            .then((doc)=>{

                setUser(doc.data());

            });
          
        } catch (error) {

            console.error('Erro ao recuperar documentos: ', error);

        }
  
        setLoading(false);
    }

    return(
        <div className="projects">
            
            projetos

            {loading === true ?  <Loading/> : <></>}
        </div>
    )
}