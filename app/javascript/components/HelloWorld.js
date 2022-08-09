import React from "react";
import PropTypes from "prop-types";

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

const GET_GREETINGS_REQUEST = 'GET_GREETINGS_REQUEST';
const GET_GREETINGS_SUCCESS = 'GET_GREETINGS_SUCCESS';

function getGreeting() {
  console.log('getGreeting(), Action!!');
  return (dispatch) => {
    dispatch({ type: GET_GREETINGS_REQUEST });
    return fetch('v1/things.json')
      .then((response) => response.json())
      .then((json) => {
        console.log(json)
        dispatch(getGreetingsSuccess(json));
      })
      .catch((error) => console.log(error));
  };
}

// function getGreeting() {
//   console.log('inside function')
//   return (dispatch) => {
//     console.log('dispatching getgreetings()');
//     dispatch({
//       type: GET_GREETINGS_REQUEST
//     });
//     console.log('dispatch getGreetings')
//     result = fetch('v1/greetings.json')
//     .then((response) => response.json())
//     .then((json) => {
//       dispatch(getGreetingsSuccess(json));
//       console.log('dispatch getGreeting success with payload')
//     })
//     .catch(error => console.log(error));
//     return result
//   };
// }

export function getGreetingsSuccess(json) {
  console.log('in get greetings success', json)
  return {
    type: GET_GREETINGS_SUCCESS,
    payload: json,
  };
}

class HelloWorld extends React.Component {
  render () {
    console.log(this.props)
    return (
      <React.Fragment>
        Greeting: {this.props.greetings}

        <button className="getGreetingsBtn" onClick={() => this.props.getGreeting()}>Get Greeting</button>
      </React.Fragment>
    );
  }
}

const structuredSelector = createStructuredSelector({
  greetings: state => state.greetings,
});

const mapDispatchToProps = { getGreeting };

HelloWorld.propTypes = {
  greetings: PropTypes.string,
};

export default connect(structuredSelector, mapDispatchToProps)(HelloWorld);
