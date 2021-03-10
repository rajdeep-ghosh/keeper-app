import React, { useState } from "react";

function CreateArea() {
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

    return (
        <div>
            <form>
                <input onChange={handleChange} name="title" value={note.title} placeholder="Title" />
                <textarea onChange={handleChange} name="content" value={note.content} placeholder="Take a note..." rows="3" />
                <button>Add</button>
            </form>
        </div>
    );
}

export default CreateArea;
