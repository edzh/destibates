import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

const Timestamp = ({ topic, category, timestampId, vod, time }) =>
  <NavLink className="no-underline" to={`/vods/${vod}/${timestampId}`}>
    <div className="px-2 py-2 mb-1 shadow-md hover:text-white bg-black text-grey border border-grey-darkest">
      <div className="flex">
        <p className="w-2/3 h-12 font-semibold text-white" dangerouslySetInnerHTML={{ __html: category}}></p>
        <p className="w-1/3 text-right mb-1">{time}</p>
      </div>

      <p dangerouslySetInnerHTML={{ __html: topic}}></p>
    </div>
  </NavLink>

export default Timestamp;
