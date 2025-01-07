import React, { useEffect, useRef } from 'react';
import { Container } from 'semantic-ui-react';
import { useState } from 'react';


const DemouseRef = () => {
    const [projet,setProjet]=useState("");
   // const inputE1= useRef();
   const Hugo = useRef();


useEffect(()=>{
    //console.log(inputE1.current.value);
    //inputE1.current.focus();
    console.log(Hugo.current.value);
    Hugo.current.focus();
})


  return (
    <div> 
       <h1>HELLO useREF</h1>
       Ajouter un projet : <input type="text" value={projet}  onChange={(e)=>{setProjet(e.target.value)}}></input>
       Ajouter un projet : <input type="text" value={projet} ref={Hugo}  onChange={(e)=>{setProjet(e.target.value)}}></input> 
    </div>
  )
  // Ajouter un projet : <input type="text" value={projet} ref={Hugo}  onChange={(e)=>{setProjet(e.target.value)}}></input> 
}

export default DemouseRef;