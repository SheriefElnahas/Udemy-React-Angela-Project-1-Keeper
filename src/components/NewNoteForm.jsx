import "./NewNoteForm.css";
import React from "react";

function NewNoteForm() {
  return (
    <div className="NewNoteForm">
      <form>
        <input type="text" placeholder="Title" name="title" />
        <textarea name="content" cols="30" rows="4" placeholder="Take a note"></textarea>
        <button>Add</button>
      </form>
    </div>
  );
}

export default NewNoteForm;
