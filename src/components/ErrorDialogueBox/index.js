import React from 'react';
import PropTypes from 'prop-types';

function ErrorDialogueBox({error}) {

    return (
        <div className="error-dialogue-box">
            <h2>Ohh noo!!</h2>
            <p>{error}</p>
        </div>
    )
}

ErrorDialogueBox.propTypes = {
    error: PropTypes.string.isRequired,
}

export default ErrorDialogueBox;
