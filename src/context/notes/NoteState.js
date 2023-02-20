import NoteContext from "./noteContex";
import { useState } from "react";

const NoteState = (props) => {
    const host = "http://localhost:5000";
    const [notes, setNotes] = useState([]);

    // get note
    const getNotes = async () => {
        try {
            console.log("Get notes called")
            let response = await fetch(`${host}/api/notes/fetchallnotes`, {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json',
                    'auth-token': localStorage.getItem('token'),
                },
            });
    
            if (response.status === 200) {
                response = await response.json();
                setNotes(response);
            }
        } catch(err) {
            console.log("err :: ", err)
        }
    }

    // add note
    const addNote = async (title, description, tag) => {
        let note = {
            title: title[0],
            description: description[0],
            tag: tag[0],
        };
        let response = await fetch(`${host}/api/notes/addnote`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNlZGNlZDdmODFiNTE0MTIzNDk3OTcxIn0sImlhdCI6MTY3NjUyOTM2N30.jppw33LPbRCiZEMSx8k_AHArnJw7EGFHtGtGsfOTlwQ',
            },
            body: JSON.stringify(note)
        });

        if (response.status === 200) {
            response = await response.json();
            setNotes(notes.concat(response));
        }
    }

    // edit note
    const editNote = async (id, title, description, tag) => {
        console.log("edit note called ");

        let response = await fetch(`${host}/api/notes/updatenote/${id}`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json',
                'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNlZGNlZDdmODFiNTE0MTIzNDk3OTcxIn0sImlhdCI6MTY3NjUyOTM2N30.jppw33LPbRCiZEMSx8k_AHArnJw7EGFHtGtGsfOTlwQ',
            },
            body: JSON.stringify({
                title,
                description,
                tag,
            })
        });


        if (response.status === 200) {
            response = await response.json();
            
            let newNotes = JSON.parse(JSON.stringify(notes));
            for (let i = 0; i < newNotes.length; i++) {
                if (newNotes[i]._id === response.note._id) {
                    newNotes[i].title = response.note.title;
                    newNotes[i].description = response.note.description;
                    newNotes[i].tag = response.note.tag;
                    break;
                }
            }
            setNotes(newNotes);
        }
    }

    // delete note
    const deleteNote = async (id) => {
        try {
            console.log("Delete note called")
            let response = await fetch(`${host}/api/notes/deletenote/${id}`, {
                method: "DELETE",
                headers: {
                    'Content-Type': 'application/json',
                    'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNlZGNlZDdmODFiNTE0MTIzNDk3OTcxIn0sImlhdCI6MTY3NjUyOTM2N30.jppw33LPbRCiZEMSx8k_AHArnJw7EGFHtGtGsfOTlwQ',
                },
            });

            if (response.status === 200) {
                let data = await response.json();
                setNotes(notes.filter(note => note._id !== data.note._id));
            }
        } catch(err) {
            console.log("err :: ", err)
        }
    }

    return (
        <NoteContext.Provider value={{notes, setNotes, getNotes, addNote, editNote, deleteNote}}>
            {props.children}
        </NoteContext.Provider>
    )
}
export default NoteState;