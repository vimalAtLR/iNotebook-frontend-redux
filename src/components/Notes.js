import React, { useContext, useEffect, useRef, useState } from "react";
import noteContext from "../context/notes/noteContex";
import NoteItem from "./NoteItem";
import AddNote from './AddNote'

function Notes() {
  const { notes, getNotes, editNote } = useContext(noteContext);
  const initialState = { id: "", etitle: "", edescription: "", etag: ""}
  const [note, setNote] = useState(initialState);

  useEffect(() => {
    getNotes();
    // eslint-disable-next-line
  }, [])

  // for click on modal toggle button
  const ref = useRef(null);
  // for click on modal close button
  const refClose = useRef(null);

  // for set data to modal, this will call from NoteItem component
  const updateNote = (note) => {
    ref?.current?.click();
    setNote({id: note._id, etitle: note.title, edescription: note.description, etag: note.tag});
  }

  // when click on edit button on modal
  const handleEdit = (e) => {
    refClose?.current?.click();
    // calling NoteState function for call api and update note in database
    editNote(note.id, Array.isArray(note.etitle) ? note.etitle[0] : note.etitle, Array.isArray(note.edescription) ? note.edescription[0] : note.edescription, Array.isArray(note.etag) ? note.etag[0] : note.etag);
  }

  // for change input value
  const onChange = (e) => {
      setNote({...note, [e.target.name] : [e.target.value] });
  }

  return (
    <>
        <AddNote />

        <button type="button" ref={ref} className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
          Launch demo modal
        </button>

        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content container">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Edit Note</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>

              <form>
                <div className="mb-3">
                    <label htmlFor="etitle" className="form-label">Title</label>
                    <input type="text" value={note.etitle} className="form-control" id="etitle" name='etitle' onChange={onChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="edescription" className="form-label">Description</label>
                    <input type="text" value={note.edescription} className="form-control" id="edescription" name='edescription' onChange={onChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="etag" className="form-label">Tag</label>
                    <input type="text" value={note.etag} className="form-control" id="etag" name='etag' onChange={onChange} />
                </div>
               </form>

              <div className="modal-footer">
                <button type="button" ref={refClose} className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary" onClick={handleEdit}>Edit</button>
              </div>
            </div>
          </div>
        </div>

        <div className="row my-3">
            <h2>Your Notes</h2>
            {notes?.map((note) => {
                return <div className="col-md-4" key={note._id}>
                    <NoteItem note={note} updateNote={updateNote} />
                </div>
            })}
        </div>
    </>  
  );
}

export default Notes;
