import React from 'react';
import PropTypes from 'prop-types';

import ImageWithLoadingSpinner from '../ImageWithLoadingSpinner';

function PolaroidImage({title, date, mediaType, url, hdurl}) {

    return (
        <div className={mediaType === 'video'? 'polaroid-video' : 'polaroid-image'}>

            <a href={hdurl || url}>

                {mediaType === 'image' &&
                    <ImageWithLoadingSpinner url={url} />
                }
               
                {mediaType === 'video' &&
                    <iframe
                        title={title}
                        src={url}
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
    date: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    mediaType: PropTypes.string.isRequired
}

export default PolaroidImage;
