import NoteContext from "./noteContex";
import { useState } from "react";

const NoteState = (props) => {
    const dummyNotes = [
        {
            "user": "63edced7f81b514123497971",
            "title": "test1 note 1",
            "description": "test1 description",
            "tag": "General",
            "_id": "63edcf59f81b514123497973",
            "date": "2023-02-16T06:38:17.759Z",
            "__v": 0
        },
        {
            "user": "63edced7f81b514123497971",
            "title": "test1 note 2",
            "description": "test1 description 2",
            "tag": "General",
            "_id": "63edcf59f81b514123497974",
            "date": "2023-02-16T06:38:17.759Z",
            "__v": 0
        },
        {
            "user": "63edced7f81b514123497971",
            "title": "test1 note 2",
            "description": "test1 description 2",
            "tag": "General",
            "_id": "63edcf59f81b514123497974",
            "date": "2023-02-16T06:38:17.759Z",
            "__v": 0
        },
        {
            "user": "63edced7f81b514123497971",
            "title": "test1 note 2",
            "description": "test1 description 2",
            "tag": "General",
            "_id": "63edcf59f81b514123497974",
            "date": "2023-02-16T06:38:17.759Z",
            "__v": 0
        },
        {
            "user": "63edced7f81b514123497971",
            "title": "test1 note 2",
            "description": "test1 description 2",
            "tag": "General",
            "_id": "63edcf59f81b514123497974",
            "date": "2023-02-16T06:38:17.759Z",
            "__v": 0
        },
        {
            "user": "63edced7f81b514123497971",
            "title": "test1 note 2",
            "description": "test1 description 2",
            "tag": "General",
            "_id": "63edcf59f81b514123497974",
            "date": "2023-02-16T06:38:17.759Z",
            "__v": 0
        },
    ]

    const [notes, setNotes] = useState(dummyNotes);
    return (
        <NoteContext.Provider value={{notes, setNotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}
export default NoteState;