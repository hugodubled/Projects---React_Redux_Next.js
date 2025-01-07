import React, { useEffect } from 'react';
import { Container } from 'semantic-ui-react';
import { useState } from 'react';


const DemoUseEffect3 = () => {
    const [projet,setProjet]=useState("");



useEffect(()=>{
    //console.log('use effect hook');
    //document.title="Je m'amuse avec useEffect";
    //return()=>document.title="J'arrete avec useEffect";
    _getData();
})

const _getData = async()=>{
 try{
    let response = await fetch(`https://etablissements-publics.api.gouv.fr/v3/departements/44/cafioppp`);
    let data = await response.json();
    console.log(data);
 } catch(erreur){
     console.log(erreur)
    }
}
  return (
    <div> 
       <h1>HELLO useEffect</h1>
       Ajouter un projet : <input type="text" value={projet} onChange={(e)=>{setProjet(e.target.value)}}></input>
        
    </div>
  )
}

export default DemoUseEffect3;