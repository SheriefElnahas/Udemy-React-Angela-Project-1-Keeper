import "./NewNoteForm.css";
import { v4 as uuidv4 } from 'uuid';
import React from "react";

function NewNoteForm(props) {
    const [note, setNote ] = React.useState({
        title: '',
        content: ''
    });
  function handleChange(e) {
    setNote(oldSate => {
        return {
            ...oldSate,
            [e.target.name] : [e.target.value]
        }
    })
  }

  function handleSubmit(e) {
        e.preventDefault();
        props.addNote(note);
        note.title = note.content = '';
  }


  return (
    <div className="NewNoteForm">
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Title" name="title" value={note.title} onChange={handleChange} />
        <textarea name="content" cols="30" rows="4" placeholder="Take a note" onChange={handleChange} value={note.content}></textarea>
        <button>Add</button>
      </form>
    </div>
  );
}

export default NewNoteForm;
