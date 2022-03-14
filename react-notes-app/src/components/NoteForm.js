import React, { useState } from "react";

function NoteForm(props) {
  // Create an object that contains the title of the note and the content of the note
  const [note, setNote] = useState({
    // Set intial state to empty string
    title: "",
    content: "",
  });

  function handleChange(event) {
    // Destructure event so that we can grab event.target name and value
    const { name, value } = event.target
    // Add to note
    setNote((prevNote) => {
      return {
        // Spread operator used to add in previous value of the object 
        ...prevNote,
        // Add new name and value 
        // [] turns name from string to value
        [name]: value,
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    // Clear out note upon submission
    setNote({
      title: "",
      content: "",
    });
    // Prevents reload of the page on submit
    event.preventDefault();
  }

  return (
    <div>
      <form className="input">
        <input
          className="input"
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
        />
        <textarea
          className="input"
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows="3"
        />
        <button onClick={submitNote}>Add</button>
      </form>
    </div>
  );
}

export default NoteForm;
