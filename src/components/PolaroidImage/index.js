/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import PropTypes from 'prop-types';

function PolaroidImage({title, date, mediaType, url, hdurl}) {

    return (
        <div className={mediaType === 'video'? 'polaroid-video' : 'polaroid-image'}>
            <a href={hdurl || url}>
                {mediaType === 'image' &&    
                    <img src={url}/>
                }
                
                {mediaType === 'video' &&    
                    <iframe
                        title={title}
                        src={url}
                        webkitallowfullscreen
                        mozallowfullscreen
                        allowfullscreen
                        frameBorder="0">
                    </iframe>
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
