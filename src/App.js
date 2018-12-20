import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import Sidebar from './containers/SidebarContainer';
import Player from './containers/PlayerContainer';
import Navbar from './components/Navbar';
import LogIn from './components/Auth/LogIn'

class App extends React.Component {
  render() {
    return(
      <BrowserRouter>
        <div className="font-sans">
          <Navbar />
          <Route exact path={'/:timestampId?'} render={({ match }) =>
            <div className="flex">
              <div className="bg-black w-full">
                <Player timestampId={match.params.timestampId} />
              </div>
              <div style={{width: "384px", height:"768px"}} className="overflow-auto" >
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
