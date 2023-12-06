import React from 'react';
import '../styles/components/Loading.css';
import IconLogo from '../assents/img/prisma_branco_v2.png';


export default function Loading(props){
    return(
        <div className="loading-container">
            <img className="loader" src={IconLogo} style={{width: props.width}}/>
         </div>
    )
}