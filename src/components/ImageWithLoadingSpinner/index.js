/* eslint-disable jsx-a11y/alt-text */

import PropTypes from 'prop-types';
import React, { Component } from 'react';
import LoadingSpinner from '../LoadingSpinner/index';

class ImageWithLoadingSpinner extends Component {

    constructor(props) {
        super(props);
        this.state = {isLoading: true};
      }

    loaded = () => this.setState({isLoading: false});
    
    render() {
        return (
            <div className="image-with-loading-spinner">
                {this.state.isLoading &&
                    <LoadingSpinner />
                }

                <img src={this.props.url} onLoad={this.loaded}/>
            </div>
        );
    }
}

ImageWithLoadingSpinner.propTypes = {
    url: PropTypes.string.isRequired
}

export default ImageWithLoadingSpinner;