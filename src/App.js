import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import videoIds from './data/videoIds';

import Player from './components/Player';
import Navbar from './components/Navbar';
import Home from './components/Home';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App font-sans">
          <Navbar />
          <div>
            <Route path={'/v/'} component={Player} />
            <Route exact path={'/'} component={Home} />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
