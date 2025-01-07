import React, { useEffect } from 'react';
import { Container } from 'semantic-ui-react';
import { useState } from 'react';

const DemoUseEffect = () => {
  
useEffect(()=>{
    console.log('use effect hook');
    //document.title="Je m'amuse avec useEffect";
    document.title="Anouar";
    //return()=>document.title="J'arrete avec useEffect";
    return()=>document.title="Hugo";
})


  return (
    <div> 
       <h1>HELLO useEffect</h1>
        
    </div>
  )
}

export default DemoUseEffect;