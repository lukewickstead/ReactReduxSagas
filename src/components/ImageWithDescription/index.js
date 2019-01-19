/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import PropTypes from 'prop-types';

function ImageWithDescription({title, url, hdurl, description}) {

    return (
        <div className="image-with-description">
            <h2>{title}</h2>
            <p>{description}</p>
            <img src={url}/>
            <a href={hdurl}>View In HD</a>
        </div>
    )
}

ImageWithDescription.propTypes = {
    url: PropTypes.string.isRequired,
    hdurl: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
}

export default ImageWithDescription;
