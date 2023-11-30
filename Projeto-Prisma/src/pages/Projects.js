import { useEffect, useState } from 'react';
import { getDoc, doc } from 'firebase/firestore';
import { db } from "../App";
import Loading from '../components/Loading';
import '../styles/pages/Projects.css';
import Storage from '../components/Storage';

export default function Projects(props){

    const [user, setUser] = useState([]);
    const [loading, setLoading] = useState(false);
    
    


  

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
            <Storage/>

            {loading === true ?  <Loading/> : <></>}
        </div>
    )
}