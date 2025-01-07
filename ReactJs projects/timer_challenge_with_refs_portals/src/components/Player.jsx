import React, {useState, useRef} from 'react';

export default function Player() {
/*  const[enteredPlayerName, setEnteredPlayerName]= useState('');
  const[submitted, setSubmitted]=useState(false);

  function handleChange(e){
    setSubmitted(false);
    setEnteredPlayerName(e.target.value);
 }

 function handleClick(){
  setSubmitted(true);
}


  return (
    <section id="player">
      <h2>Welcome {submitted? enteredPlayerName: "unknown entity"} </h2>
      <p>
        <input 
         onChange={handleChange}
         type="text" 
         value={enteredPlayerName}
         />

        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );*/

  const playerName = useRef();
  const[enteredPlayerName, setEnteredPlayerName]= useState('');


 function handleClick(){
  setEnteredPlayerName(playerName.current.value);
  playerName.current.value=""
}


  return (
    <section id="player">
      <h2>Welcome {enteredPlayerName!=""? enteredPlayerName: "unknown entity"} </h2>
      <p>
        <input 
         ref={playerName}
         type="text" 
         />

        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  )

}
