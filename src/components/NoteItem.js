import React from 'react'

function NoteItem(props) {
    const { title, description } = props.note;
  return (
    <div className='col-md-3'>
        <div className="card my-2" style={{"width": "18rem"}}>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <i className="fa-solid fa-trash mx-3"></i>
                <i className="fa-regular fa-pen-to-square mx-3"></i>
                {/* <FontAwesomeIcon icon="fa-solid fa-trash" /> */}
            </div>
        </div>
    </div>
  )
}

export default NoteItem
