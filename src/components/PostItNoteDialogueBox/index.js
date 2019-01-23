import React from 'react';

function PostItNoteDialogueBox({title, information, closeHandler}) {

    return (
        <div className="postItNoteDialogueBox">
            <h1>{title}</h1>
            <p>{information}</p>
            <button className="simple-text-button" onClick={closeHandler}>OK!</button>
        </div>
    )
}

export default PostItNoteDialogueBox;
