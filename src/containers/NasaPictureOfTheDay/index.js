import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import DateSelector from '../../components/DateSelector';
import LoadingSpinner from '../../components/LoadingSpinner';
import ErrorDialogueBox from '../../components/ErrorDialogueBox';
import ImageWithDescription from '../../components/ImageWithDescription';
import { getNasaPictureOfTheDay } from "../../actions/nasaPictureOfTheDay";

class NasaPictureOfTheDay extends Component {

  componentDidMount() {
    this.props.getNasaPictureOfTheDayHandler();
  } 
 
  render() {

    const {
      explanation,
      hdurl,
      url,
      title, 

    } = this.props.data;

    const {isLoading, error} = this.props;

    return (
          <>     
            <h1>NASA Picture of the Day</h1>
            <DateSelector/>
            
            {isLoading &&
              <LoadingSpinner />
            }

            {error &&
              <ErrorDialogueBox error={error} />
            }

            { !isLoading && !error &&
              <ImageWithDescription
                title={title}
                url={url}
                hdurl={hdurl}
                description={explanation} />
            }
          </> 
     );
  }
}

NasaPictureOfTheDay.propTypes = {
  data: PropTypes.object.isRequired,
  error: PropTypes.string.isRequired,
  isLoading: PropTypes.bool.isRequired
}

const mapStateToProps = state => {
  return {
      data: state.nasaPictureOfTheDay.data,
      error: state.nasaPictureOfTheDay.error,
      isLoading: state.nasaPictureOfTheDay.isLoading
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getNasaPictureOfTheDayHandler: error => {
          dispatch(getNasaPictureOfTheDay(error));
      }
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NasaPictureOfTheDay));

