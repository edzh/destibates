import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

const Timestamp = ({ topic, category, timestampId, currentVod, vod, currentTimestamp, timestamp, onTimestampClick }) =>
  <div
    onClick={() => onTimestampClick(vod, timestamp)}
    className={`px-2 py-2 mt-2 mx-2 hover:text-white ${currentTimestamp === timestamp && currentVod === vod? 'bg-grey-darkest' : 'bg-black'} text-grey border border-grey-darkest rounded`}>
    <div className="flex">
      <p className="w-2/3 h-12 font-semibold text-white" dangerouslySetInnerHTML={{ __html: category}}></p>
      <p className="w-1/3 text-right mb-1">{timestamp}</p>
    </div>

    <p dangerouslySetInnerHTML={{ __html: topic}}></p>
  </div>

export default Timestamp;
