/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import PropTypes from 'prop-types';

function PolaroidImage({title, date, mediaType, url, hdurl}) {

    return (
        <div className="polaroid-image">
            <a href={hdurl || url}>
                {mediaType === 'image' &&    
                    <img src={url}/>
                }
                
                {mediaType === 'video' &&    
                    <iframe title={title} src={url} width="100%" min-width="100%" frameBorder="0"></iframe>
                }

                <p>{date} - {title}</p>
            </a>
        </div>
    )
}

PolaroidImage.propTypes = {
    hdurl: PropTypes.string,
    url: PropTypes.string.isRequired,
    mediaType: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
}

export default PolaroidImage;
