import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import videoIds from '../data/videoIds';

const VideoNav = () =>
  <div>
    <ul>
      { Object.keys(videoIds).map( videoId =>
        <li key={videoId}>
          <NavLink to={`/v/${videoId}`}>{videoId}</NavLink>
        </li>
      )}
    </ul>
  </div>


export default VideoNav;
