import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import NoteForm from "./NoteForm";
import QuoteList from "./QuoteList";

function App() {
  // Fetch some data right after the first render. UseEffect will help
  // ensure that the call to fetch is timed correctly
  const [data, setData] = useState([]);
  useEffect(() => {
    // Use setData to set the state variable data to the complete array of quotes from our
    // new RESTful API that you retrieve using fetch
    fetch("http://localhost:3003/quotes")
      .then((x) => x.json())
      .then((x) => setData(x));
  }, []);

  // Start out with no notes
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes((prevNotes) => {
      // Return all previous notes, as well as new
      return [...prevNotes, newNote];
    });
  }
  function deleteNote(id) {
    setNotes((prevNotes) => {
      // Filter all notes and end up with array of everything in the prev notes
      // other than the ones where the index matches the id of the note to be deleted
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <QuoteList quotes={data} />
      <NoteForm onAdd={addNote} />
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}
export default App;
