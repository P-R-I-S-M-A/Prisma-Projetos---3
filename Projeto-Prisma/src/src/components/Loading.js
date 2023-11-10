import React from 'react';
import '../styles/components/Loading.css';


export default function Loading(){
    return(
        <div className="loading-container">
            <div className="loader"></div>
            <p>Carregando...</p>
         </div>
    )
}