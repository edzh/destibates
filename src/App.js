import React, { Component } from 'react';
import { HashRouter, BrowserRouter, Route, Link } from 'react-router-dom';
import videoIds from './data/videoIds';

import Player from './components/Player/Player';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Options from './components/Options';
import Vods from './components/Vods/Vods';
import LogIn from './components/Auth/LogIn';
import Register from './components/Auth/Register';
import TimestampList from './components/Timestamps/TimestampList'


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App font-sans">
          <Navbar />
          <div>
            <Route exact path={'/vods/:vodId?/:timestamp?'} render={({ match }) => (
              <Player vodId={match.params.vodId} timestamp={match.params.timestamp} />
            )} />
            <Route exact path={'/'} component={Home} />
            <Route path={'/options'} component={Options} />
            <Route path={'/login'} component={LogIn} />
            <Route path={'/register'} component={Register} />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
