import Button from "./Button.jsx";
import Modal from "./Modal.jsx";
import { useState, useRef } from "react";

export default function NewTask({ onAdd }) {
  const [enteredValue, setEnteredValue] = useState("");
  const modal = useRef();

  function handleChange(e) {
    setEnteredValue(e.target.value);
  }

  function handleClick() {
    {
      enteredValue !== "" ? onAdd(enteredValue) : modal.current.open();
    }
    setEnteredValue("");
  }

  return (
    <>
      <Modal ref={modal}>
        <h2 className="text-xl font-bold text-stone-900 my-4">No Input</h2>
        <p className="text-stone-700 mb-4">You forgot to enter a Task, please enter a valid task </p>
      </Modal>
      <div className="flex items-center gap-4">
        <input
          type="text"
          onChange={handleChange}
          className="w-64 px-2 py-1 rounded-sm bg-stone-200"
          value={enteredValue}
        />
        <Button onClick={handleClick}>Add Task</Button>
      </div>
    </>
  );
}
