import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import videoIds from '../data/videoIds';

const VideoNav = () =>
  <div className="flex p-6">
    <h1 className="text-white mr-6">Destibates</h1>
    <ul className="list-reset overflow-y-auto flex">
      { Object.keys(videoIds).map( videoId =>
        <li className="mr-6 mt-3" key={videoId}>
          <NavLink className="block text-grey hover:text-white no-underline" to={`/v/${videoId}`}>
            {videoIds[videoId].date}
          </NavLink>
        </li>
      )}
    </ul>
  </div>


export default VideoNav;
