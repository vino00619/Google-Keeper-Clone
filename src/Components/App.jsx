import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";
import CreateArea from "./CreateArea";



function App() {

  const [notes, setNotes] = useState([]);

  function addNote(newNote){
    setNotes(prevNote => {
      return [...prevNote, newNote]
    }) 
 }

  return (
    <div>
      <Header />
      <CreateArea 
        onAdd={addNote}
      />
      {notes.map((noteItem) => {
        return <Note
          key={noteItem.key}
          title={noteItem.title}
          content={noteItem.content}
        />
      }
      )}

      <Footer />
    </div>
  );
}

export default App;
