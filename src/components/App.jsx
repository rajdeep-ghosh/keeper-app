import React, { useState } from 'react';
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {    
    function addNote(note) {

    }

    return (
        <div>
            <Header />
            <CreateArea onAdd={addNote} />
            <Note title="Note Title" content="Note Content" />
            <Footer />
        </div>
    );
}

export default App;
