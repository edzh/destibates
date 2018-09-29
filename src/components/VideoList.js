import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import videoIds from '../data/videoIds';

const VideoList = () =>
  <div>
    <div className="">
      <ul className="overflow-auto list-reset" style={{height: '720px'}}>
        { Object.keys(videoIds).map( videoId =>
          <li className="mx-2" key={videoId}>
            <NavLink className="mb-2 p-2 bg-black border border-grey-darkest shadow-md block text-grey hover:text-white no-underline" activeClassName="bg-grey-darker" to={`/v/${videoId}/0:00:00`}>
              {videoIds[videoId].date}
            </NavLink>
          </li>
        )}
      </ul>
    </div>
  </div>


export default VideoList;
