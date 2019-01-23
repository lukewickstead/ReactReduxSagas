import React from 'react';

function SimpleTextButtonGroup({previousHandler, nextHandler, infoHandler}) {

    return (
        <div>
            <button className='simple-text-button' onClick={previousHandler}>PREV</button>
            <button className='simple-text-button' onClick={nextHandler}>NEXT</button>
            <button className='simple-text-button' onClick={infoHandler}>INFO</button>
        </div>
    )
}

export default SimpleTextButtonGroup;
