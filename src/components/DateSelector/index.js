import React from 'react';

function DateSelector({error}) {

    return (
        <span className="date-selector">
            <div className='button'>&lt;&lt;&lt;</div>
            <div className='button'>&lt;&lt;</div>
            <div className='button'>&lt;</div>
            <div className='button'>Today</div>
            <div className='button'>&gt;</div>
            <div className='button'>&gt;&gt;</div>
            <div className='button'>&gt;&gt;&gt;</div>
        </span>
    )
}

export default DateSelector;
