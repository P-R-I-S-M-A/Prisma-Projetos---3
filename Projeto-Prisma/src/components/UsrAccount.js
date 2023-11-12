import '../styles/components/UsrAccount.css';
import React, { useEffect, useState } from "react"; 
import { collection, getDocs } from "firebase/firestore"; 
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { db } from '../App';

export default function UsrAccount(){

    function mostrarNome(){
    const auth = getAuth();
    const user = auth.currentUser;

    if (user !== null) {
      const displayName = user.displayName
      const email = user.email
      const uid = user.uid
      console.log(displayName)
      console.log(email)
      console.log(uid)
      console.log(displayName)
      document.getElementById('name').innerText = email
    } else {
      console.log("nao")
    }
}

useEffect(() => { 
    mostrarNome(); 
  }, [])


    return(
        <div className="usr-main">
            <div id="name">
                nomenomenome
            </div>
            <div className="picture">
            </div>
        </div>
    )
}
