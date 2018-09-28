import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import videoIds from './data/videoIds';

import Player from './components/Player';
import VideoNav from './components/VideoNav';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div>
        <VideoNav />
        <div className="App bg-black">
          <Route exact path={'/'} render={() => <div>Hello world</div>} />
          <Route path={'/v/:videoId'} component={Player} />
        </div>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
