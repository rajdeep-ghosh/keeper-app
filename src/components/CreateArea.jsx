import React, { useState } from "react";

function CreateArea(props) {
    const [note, setNote] = useState({title: "", content: ""});

    function handleChange(event) {
        const {name, value} = event.target;

        setNote(prevNote => {
            return {
                ...prevNote,
                [name]: value
            }
        });
    }

    function handleClick(event) {
        props.onAdd(note);
        setNote({title: "", content: ""});
        event.preventDefault();
    }

    return (
        <div>
            <form className="create-note">
                <input onChange={handleChange} name="title" value={note.title} placeholder="Title" />
                <textarea onChange={handleChange} name="content" value={note.content} placeholder="Take a note..." rows="3" />
                <button onClick={handleClick}>Add</button>
            </form>
        </div>
    );
}

export default CreateArea;
