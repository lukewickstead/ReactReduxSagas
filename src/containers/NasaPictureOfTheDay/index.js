import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import PolaroidImage from '../../components/PolaroidImage';
import PostItNoteDialogueBox from '../../components/PostItNoteDialogueBox';
import SimpleTextButtonGroup from '../../components/SimpleTextButtonGroup';

import {
  getNasaPictureOfTheDay,
  putNasaPictureOfTheDayError,
  putDisplayNasaPictureOfTheDayExplanation
} from "../../actions/nasaPictureOfTheDay";

class NasaPictureOfTheDay extends Component {

  componentDidMount() {
    this.props.getNasaPictureOfTheDayHandler();
  } 
 
  render() {

    const {isLoading, error, displayExplanation} = this.props;
    const { url, date, hdurl, title, media_type, explanation, } = this.props.data;

    return (
          <>
            <div className="nasaPicOfDayContainer">
              <h1>NASA Picture of the Day</h1>

              {isLoading &&
                <div className="loadingMessage">
                  <p>Please wait, loading....</p>
                </div>
              }

              {displayExplanation &&
                <PostItNoteDialogueBox
                  title={title}
                  information={explanation}
                  closeHandler={() => this.props.putDisplayNasaPictureOfTheDayExplanationHandler(false)}>
                </PostItNoteDialogueBox>
              }

              {error &&
                <PostItNoteDialogueBox
                  title={"Something wen't wrong...."}
                  information={error}
                  closeHandler={() => this.props.resetNasaPictureOfTheDayErrorHandler()} />
              }

              {!isLoading &&
                <SimpleTextButtonGroup
                  previousHandler={() => this.props.getNasaPictureOfTheDayHandler(-1)}
                  nextHandler={() => this.props.getNasaPictureOfTheDayHandler(1)}
                  infoHandler={() => this.props.putDisplayNasaPictureOfTheDayExplanationHandler(true)}/>
              }

              { !isLoading && !error && url &&
                  <PolaroidImage
                    title={title}
                    date={date}
                    url={url}
                    hdurl={hdurl}
                    mediaType={media_type}
                     />
              }
            </div>
          </> 
     );
  }
}

NasaPictureOfTheDay.propTypes = {
  data: PropTypes.object.isRequired,
  error: PropTypes.string.isRequired,
  isLoading: PropTypes.bool.isRequired,
  displayExplanation: PropTypes.bool.isRequired,
  getNasaPictureOfTheDayHandler: PropTypes.func.isRequired,
  resetNasaPictureOfTheDayErrorHandler: PropTypes.func.isRequired,
  putDisplayNasaPictureOfTheDayExplanationHandler: PropTypes.func.isRequired
}

const mapStateToProps = state => {
  return {
      data: state.nasaPictureOfTheDay.data,
      error: state.nasaPictureOfTheDay.error,
      isLoading: state.nasaPictureOfTheDay.isLoading,
      displayExplanation: state.nasaPictureOfTheDay.displayExplanation
  }
}

const mapDispatchToProps = dispatch => {
  return {
      getNasaPictureOfTheDayHandler: day => dispatch(getNasaPictureOfTheDay(day)),
      resetNasaPictureOfTheDayErrorHandler: () => dispatch(putNasaPictureOfTheDayError('')),
      putDisplayNasaPictureOfTheDayExplanationHandler: display => dispatch(putDisplayNasaPictureOfTheDayExplanation(display))
  }
}

export const NasaPictureOfTheDayContainer = NasaPictureOfTheDay;

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NasaPictureOfTheDay));
