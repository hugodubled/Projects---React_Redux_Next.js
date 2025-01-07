import React, { useEffect } from 'react';
//import { Container } from 'semantic-ui-react';
import { useState } from 'react';

var i=0;
const DemoUseEffect2 = () => {
    const [projet,setProjet]=useState("");
    //const [projets,setProjets]=useState("");
    


useEffect(()=>{
  ++i;
    console.log('use effect hook');
    document.title="Je m'amuse avec useEffect";
    document.getElementById("element").innerHTML=+i;
    return()=>document.title="J'arrete avec useEffect";
},[projet])


  return (
    <div> 
       <h1>HELLO useEffect</h1>
       <p  id="element"></p>
       Ajouter un projet : <input type="text" id="texte" value={projet} onChange={(e)=>{setProjet(e.target.value)}}></input>
       
    </div>
  )
}

export default DemoUseEffect2;