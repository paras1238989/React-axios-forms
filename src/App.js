import React, { Component } from 'react';
import './App.css';
import AxiosExample from './AxiosExample';
import AxiosExamplePost from './AxiosExamplePost'
import Form from './Form'

class App extends Component {
  render() {
    return (
    <div>
      <Form />
      <AxiosExamplePost />
      <AxiosExample />
    </div>
    );
  }
}

export default App;
