import React, { useContext } from "react";
import noteContext from "../context/notes/noteContex";
import NoteItem from "./NoteItem";

function Notes() {
  const { notes } = useContext(noteContext);
  return (
    <div>
      <div className="row my-3">
        <h2>Your Notes</h2>
        {notes?.map((note) => {
            return <div className="col-md-4" key={note._id}>
                <NoteItem note={note} />
            </div>
        })}
      </div>
    </div>
  );
}

export default Notes;
