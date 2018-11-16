import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

const Timestamp = ({ topic, category, timestampId, vod, time }) =>
  <NavLink className="no-underline" to={`/vods/${vod}/${timestampId}`}>
    <div className="px-4 py-2 mb-2 shadow-md hover:text-white bg-black text-grey border border-grey-darkest">
      <div className="flex">
        <p className="w-3/4 h-12 float-left font-semibold text-white" >{category}</p>
        <p className="w-1/4 text-right ml-4 mb-1">{time}</p>
      </div>

      <p>{topic}</p>
    </div>
  </NavLink>

export default Timestamp;
