import './App.css';
import { v4 as uuidv4 } from 'uuid';
import React from 'react';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Note from "./components/Note";
import NewNoteForm from './components/NewNoteForm';



function App() {
  const [notes, setNotes ] = React.useState([
    {
      id: uuidv4(),
      title: "Anime",
      content: "Attack On Titan"
    },
    {
      id: uuidv4(),
      title: "Tv",
      content: "Squid Game"
    },
    {
      id: uuidv4(),
      title: "Movie",
      content: "The Dark Knight"
    },
  ]);
  const notesElement = notes.map((note) => {
   return <Note title={note.title} content={note.content} key={note.id} id={note.id} deleteNote={deleteNote}/>
  })

  function addNote(note) {
    const newNote = {...note, id: uuidv4()}
    setNotes(oldState => {
      return [...oldState, newNote]
    })
  }

  function deleteNote(noteId) {
    setNotes(oldState => {
      return oldState.filter(note => note.id !== noteId);
    })
  }

  return (
    <div className="App">
      <Header />
      <NewNoteForm addNote={addNote} />
       {notesElement}
      <Footer />
    </div>
  )
}

export default App

//CHALLENGE:
//1. Implement the add note functionality.
//- Create a constant that keeps track of the title and content.
//- Pass the new note back to the App.
//- Add new note to an array.
//- Take array and render seperate Note components for each item.

//2. Implement the delete note functionality.
//- Callback from the Note component to trigger a delete function.
//- Use the filter function to filter out the item that needs deletion.
//- Pass a id over to the Note component, pass it back to the App when deleting.

//This is the end result you're aiming for:
//https://pogqj.csb.app/