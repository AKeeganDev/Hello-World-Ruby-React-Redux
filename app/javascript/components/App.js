import React from "react"
import PropTypes from "prop-types"

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import HelloWorld from "./HelloWorld"

class App extends React.Component {
  render () {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element= {<h1>Home</h1>} />
          <Route path="/hello" element= {<HelloWorld greeting="Friend and Friend and Friend and friend"/>} />
          </Routes>
      </BrowserRouter>
    );
  }
}

export default App
