import React from "react";
import PropTypes from "prop-types";

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

const GET_GREETINGS_REQUEST = 'GET_GREETINGS_REQUEST'
const GET_GREETINGS_SUCCESS = 'GET_GREETINGS_SUCCESS'

function getGreeting() {
  return (dispatch) => {
    dispatch({
      type: GET_GREETINGS_REQUEST
    });
    return fetch('v1/greetings.json')
    .then((response) => response.json())
    .then((json) => {
      dispatch(getGreetingsSuccess(json));
    })
    .catch(error => console.log(error));
  };
}

export function getGreetingsSuccess(json) {
  return {
    type: GET_GREETINGS_SUCCESS,
    payload: json,
  };
}

class HelloWorld extends React.Component {
  render () {

    const { greetings } = this.props;
    const greetingsList = greetings.map((greeting) => {
      return <li>{greeting}</li>
    })
    return (
      <React.Fragment>
        Greeting: {this.props.greeting}

        <button className="getGreetingsBtn" onClick={() => this.props.getGreeting()}>Get Greeting</button>
        <ul>{greetingsList}</ul>
      </React.Fragment>
    );
  }
}

const structuredSelector = createStructuredSelector({
  greetings: state => state.greetings,
});

const mapDispatchToProps = { getGreetings };

HelloWorld.propTypes = {
  greetings: PropTypes.string,
};

export default connect(structuredSelector, mapDispatchToProps)(HelloWorld);
