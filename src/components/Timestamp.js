import React, { Component } from 'react';
import videoIds from '../data/videoIds'

function hmsToSecondsOnly(str) {
  var p = str.split(':'),
    s = 0, m = 1;

  while (p.length > 0) {
    s += m * parseInt(p.pop(), 10);
    m *= 60;
  }

  return s;
}

const Timestamp = ({ handleChangeTimestamp, videoId }) =>
  Object.keys(videoIds[videoId].timestamps).map((timestamp) =>
    <div className="px-4 py-2 hover:text-white text-grey border border-grey-darkest" style={{backgroundColor: 'black'}} key={timestamp} onClick={() => handleChangeTimestamp(hmsToSecondsOnly(timestamp))}>
      <div className="flex">
        <p className="w-3/4 float-left font-semibold text-white" >{videoIds[videoId].timestamps[timestamp].category}</p>
        <p className="w-1/4 text-right ml-4 mb-1" >{timestamp}</p>
      </div>
      <p>{videoIds[videoId].timestamps[timestamp].topic}</p>
    </div>
    )


export default Timestamp;
 // { <tr key={timestamp} className="hover:text-white cursor-pointer" onClick={() => handleChangeTimestamp(hmsToSecondsOnly(timestamp))}>
 //     <td>{timestamp}</td>
 //     <td>{videoIds[videoId].timestamps[timestamp].category}</td>
 //     <td>{videoIds[videoId].timestamps[timestamp].topic}</td>
 //   </tr>
 // }
