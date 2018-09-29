import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import videoIds from './data/videoIds';

import Player from './components/Player';
import Navbar from './components/Navbar';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App font-sans">
        <Navbar />
        <div>
          <Route exact path={'/'} render={() => <div><Link to={'/v/311225842/0:00:00'}>Link</Link></div>} />
          <Route path={'/v/:videoId/:timestamp'} component={Player} />
        </div>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
