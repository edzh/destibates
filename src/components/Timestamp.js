import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import videoIds from '../data/videoIds'

const Timestamp = ({ handleChangeTimestamp, timestamp, videoId }) =>
  <NavLink className="no-underline" to={`/v/${videoId}/${timestamp}`}>
    <div className="px-4 py-2 mb-2 shadow-md hover:text-white bg-black text-grey border border-grey-darkest">
      <div className="flex">
        <p className="w-3/4 h-12 float-left font-semibold text-white" >{videoIds[videoId].timestamps[timestamp].category}</p>
        <p className="w-1/4 text-right ml-4 mb-1">{timestamp}</p>
      </div>

      <p>{videoIds[videoId].timestamps[timestamp].topic}</p>
    </div>
  </NavLink>



export default Timestamp;
