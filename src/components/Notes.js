import React, { useContext, useEffect } from "react";
import noteContext from "../context/notes/noteContex";
import NoteItem from "./NoteItem";
import AddNote from './AddNote'

function Notes() {
  const { notes, getNotes } = useContext(noteContext);
  useEffect(() => {
    getNotes();
    // eslint-disable-next-line
  }, [])
  return (
    <>
        <AddNote />
        <div className="row my-3">
            <h2>Your Notes</h2>
            {notes?.map((note) => {
                return <div className="col-md-4" key={note._id}>
                    <NoteItem note={note} />
                </div>
            })}
        </div>
    </>  
  );
}

export default Notes;
