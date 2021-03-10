import React from "react";

function CreateArea() {
    return (
        <div>
            <form>
                <input type="text" name="title" placeholder="Title" />
                <textarea name="content" placeholder="Take a note..." rows="3" />
                <button>Add</button>
            </form>
        </div>
    );
}

export default CreateArea;
