import React from 'react';

function DateSelector({date}) {

    return (
        <span className="date-selector">
            <div className='button'>PREV</div>
            <div className='button'>{date}</div>
            <div className='button'>NEXT</div>
        </span>
    )
}

export default DateSelector;
