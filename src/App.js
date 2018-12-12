import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import Sidebar from './containers/SidebarContainer';
import Player from './containers/PlayerContainer';
import Vods from './components/Vods/Vods';
import Navbar from './components/Navbar';
import LogIn from './components/Auth/LogIn'

class App extends React.Component {
  render() {
    return(
      <BrowserRouter>
        <div className="font-sans">
          <Navbar />
          <Route exact path={'/'} render={() =>
            <div className="flex">
              <div className="bg-black w-full">
                <Player />
              </div>
              <div className="w-1/5 overflow-auto h-screen" >
                <Sidebar />
              </div>
            </div>
          } />
          <Route path={'/login'} component={LogIn} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
