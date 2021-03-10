import React, { useState } from "react";
import Zoom from '@material-ui/core/Zoom';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

function CreateArea(props) {
    const [note, setNote] = useState({title: "", content: ""});

    const [isExpanded, setExpanded] = useState(false);

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

    function expand() {
        setExpanded(true);
    }

    return (
        <div>
            <form className="create-note">
                {isExpanded && <input onChange={handleChange} name="title" value={note.title} placeholder="Title" />}
                <textarea 
                    onChange={handleChange} 
                    onClick={expand} 
                    name="content" 
                    value={note.content} 
                    placeholder="Take a note..." 
                    rows={isExpanded ? 3 : 1}
                />
                <Zoom in={isExpanded}>
                    <Fab onClick={handleClick}>
                        <AddIcon />
                    </Fab>
                </Zoom>
            </form>
        </div>
    );
}

export default CreateArea;
