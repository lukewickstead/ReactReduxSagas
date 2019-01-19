import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import { getNasaPictureOfTheDay } from "../actions/nasaPictureOfTheDay";

class NasaPictureOfTheDay extends Component {

  componentDidMount() {
    this.props.getNasaPictureOfTheDayHandler();
  } 
 
  render() {

    const {
      copyright,
      date,
      explanation,
      hdurl,
      url,
      title, 

    } = this.props.data;

    return (
      <>
        <h1>NASA Picture of the Day</h1>
        <h2>{title}</h2>
        <p>{explanation}</p>
        <img src={url} alt="APOD Image"/>
        <a href={hdurl}>View In HD</a>
        <p>Copyright @ {copyright}</p>        
        <p>{date}</p>
      </>
     );
  }
}

NasaPictureOfTheDay.propTypes = {
  data: PropTypes.object.isRequired,
}

const mapStateToProps = state => {
  return {
      data: state.nasaPictureOfTheDay.data,
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

