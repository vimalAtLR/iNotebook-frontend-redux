import React, { useContext } from 'react'
import noteContext from '../context/notes/noteContex';

function NoteItem(props) {
    const { title, description, _id } = props.note;
    const { updateNote } = props;
    const { deleteNote } = useContext(noteContext);
  return (
    <div className='col-md-3'>
        <div className="card my-2" style={{"width": "18rem"}}>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <i className="fa-solid fa-trash mx-3" onClick={() => deleteNote(_id)}></i>
                <i className="fa-regular fa-pen-to-square mx-3" onClick={() => updateNote(props.note)}></i>
            </div>
        </div>
    </div>
  )
}

export default NoteItem
