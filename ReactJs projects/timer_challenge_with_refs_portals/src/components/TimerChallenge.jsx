import { useState, useRef } from "react";
import ResultModal from "./ResultModal.jsx";

export default function TimerChallenge({ title, targetTime }) {
  const timer = useRef();
  const dialogLost = useRef();
  const dialogWin = useRef();

  const [timerValidation, setTimerValidation] = useState(false);
  const [timerExpired, setTimerExpired] = useState(false);
  const [timerStarted, setTimerStarted] = useState(false);

  function handleStart() {
    setTimerValidation(false);
    timer.current = setTimeout(() => {
      setTimerExpired(true);
      dialogLost.current.open();
      setTimerStarted(false);
    }, targetTime * 1000);
    setTimerStarted(true);
  }

  function handleStop() {
    {
      timerExpired ? setTimerValidation(false) : setTimerValidation(true);
    }
    dialogWin.current.open();
    setTimerExpired(false);
    setTimerStarted(false);
    clearTimeout(timer.current);
  }

  return (
    <>
        <ResultModal ref={dialogLost} targetTime={targetTime}  result="lost" />
        <ResultModal ref={dialogWin} targetTime={targetTime}  result="win" />
      <section className="challenge">
        <h2>{title}</h2>
        {timerExpired ? <p>You lost!</p> : undefined}
        {timerValidation ? <p>You win!</p> : undefined}

        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>
        <p>
          <button onClick={timerStarted ? handleStop : handleStart}>
            {timerStarted ? "Stop" : "Start"} Challenge
          </button>
        </p>
        <p className={timerStarted ? "active" : "undefined"}>
          {timerStarted ? "Time is running" : "Timer inactive"}
        </p>
      </section>
    </>
  );
}
