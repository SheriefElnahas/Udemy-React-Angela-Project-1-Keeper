import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Note from "./components/Note";
import  notes  from "./notes";

//Challenge. Render all the notes inside notes.js as a seperate Note
//component.


function App() {
  const notesElement = notes.map((note) => {
   return <Note title={note.title} content={note.content} key={note.key} />
  })

  return (
    <div className="App">
      <Header />
      {/* <Note /> */}
      {notesElement}
      <Footer />
    </div>
  )
}

export default App


