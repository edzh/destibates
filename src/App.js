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
          <Route path={'/v/:videoId/:timestamp'} component={Player} />
          <Route path={'/'} render={() =>
            <div>
              <Link className=" no-underline" to={'/v/311225842/0:00:00'}><button className="block text-white mx-auto my-auto bg-grey-darker font-semibold text-lg p-4 shadow-md">Click here to begin watching</button></Link>
            </div>
          }
          />
        </div>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
