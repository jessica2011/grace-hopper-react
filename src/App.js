import React, { Component } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Aside from './components/Aside';

import './app.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Header/>
        <hr className="mb-4"></hr>
        <div className="row">
          <div className="col-8">
            <Main/>
          </div>
          <div className="col-4">
            <Aside/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;