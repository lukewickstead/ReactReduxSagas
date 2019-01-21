import React from 'react';

function SimpleTextButtonGroup({previousHandler, nextHandler, infoHandler}) {

    return (
        <div>
            <button className='simpleTextButton' onClick={previousHandler}>PREV</button>
            <button className='simpleTextButton'onClick={nextHandler}>NEXT</button>
            <button className='simpleTextButton' onClick={infoHandler}>INFO</button>
        </div>
    )
}

export default SimpleTextButtonGroup;
