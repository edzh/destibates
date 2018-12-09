import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import Sidebar from './containers/SidebarContainer';
import Player from './containers/PlayerContainer';
import Vods from './components/Vods/Vods';

class App extends React.Component {
  render() {
    return(
      <div className="flex font-sans">
        <div className="bg-black w-full">
          <Player />
        </div>
        <div className="w-1/5 overflow-auto h-screen" >
          <Sidebar />
        </div>
      </div>
    );
  }
}

export default App;
