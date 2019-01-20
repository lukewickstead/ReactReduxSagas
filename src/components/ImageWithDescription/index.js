/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import PropTypes from 'prop-types';

function PolaroidImage({title, url, hdurl}) {

    return (
        <div className="polaroid-image">
            <img src={url}/>
            <p>{title}</p>
        </div>
    )
}

PolaroidImage.propTypes = {
    url: PropTypes.string.isRequired,
    hdurl: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
}

export default PolaroidImage;
