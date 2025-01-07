import React from 'react';
import { Button, Container } from 'semantic-ui-react';
import { useState } from 'react';

const Demostatemultiples = () => {
  const [projet,setProjet]=useState("")
  const [projets,setProjets] = useState([])

const addProjet=()=>{
  if (projet!==""){
    const newProjets =[...projets, projet];
    setProjets(newProjets);
    setProjet("");
  }
}

  console.log(projets)
  return (
    <div> 
        Ajouter un projet : <input type="text" value={projet} onChange={(e)=>{setProjet(e.target.value)}}></input>
        
           <Button onClick={addProjet}> Ajouter le projet</Button>
           <h1>Demo State : {projet}</h1>
           <ul>
             {projets.map((projet,i)=>{
               return <li key={`projetnr${i}`}>{projet}</li>
             })}
           </ul>
        
        
    </div>
  )
}

export default Demostatemultiples;