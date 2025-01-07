import Modal from "./Modal.jsx"
import Input from "./Input.jsx";
import { useRef } from "react";

export default function NewProject({ onAddProject, onCancelProject}) {
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();
  const modal = useRef();

  function handleSave() {
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDueDate = dueDate.current.value;

    if (
      enteredTitle.trim() === "" ||
      enteredDescription.trim() === "" ||
      enteredDueDate.trim() === ""
    ) {
      modal.current.open();
      return;
    }

    onAddProject({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate,
    });
  }

  function handleCancel(){
    onCancelProject();
  }

 

  return (
    <>
    <Modal ref={modal}>
        <h2 className="text-xl font-bold text-stone-900 my-4">
            Invalid Input
        </h2>
        <p className="text-stone-700 mb-4">
            fou forgot to provide a value
        </p>
        <p className="text-stone-700 mb-4">
            Please make sure you provid a valid value for every input field
        </p>
    </Modal>
    <div className="w-[35rem] mt-16">
      <menu className="flex items-center justify-end gap-4 my-4">
        <li>
          <button 
           className="px-6 py-2 rounded-md bg-stone-400 text-stone-800 hover:text-stone-950"
           onClick={handleCancel}>
            Cancel
          </button>
        </li>
        <li>
          <button
            onClick={handleSave}
            className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950">
            Save
          </button>
        </li>
      </menu>
      <div>
        {/*} <p>
                <label>Title</label>
                <textarea/>
            </p>
            <p>
                <label>Description</label>
                <input/>
            </p>
            <p>
                <label>Due Date</label>
                <input/>
         </p>*/}
        <Input type="text" ref={title} label="title" />
        <Input ref={description} label="Description" textarea />
        <Input type="date" ref={dueDate} label="Due Date" />
      </div>
    </div>
  </>
  )
}
