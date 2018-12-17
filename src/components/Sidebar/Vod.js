import React from 'react';
import moment from 'moment'
import TimestampList from '../../containers/TimestampListContainer';

const Vod = ({ vod, setTimestampsByVod, onVodClick, currentVod }) => {

return(
  <li>
    <div onClick={() => {
      setTimestampsByVod(vod.timestamps);
      currentVod === vod.vodId
        ? onVodClick('')
        : onVodClick(vod.vodId);
      }}
      className={`flex rounded ${currentVod === vod.vodId ? 'bg-grey-darker' : 'bg-grey-darkest'} text-grey-light py-1 mx-2 mb-0 mt-2`}>
      <p className="ml-auto">
        { moment(vod.date).format('LT') }
      </p>
      <p className="ml-auto mr-4 text-xs">{ vod.timestamps.length } timestamps </p>
      <p className="mr-1">{ currentVod === vod.vodId ? '\u25be' : '\u25b8' }</p>

    </div>
    {currentVod === vod.vodId && <TimestampList />}
  </li>)}

export default Vod;
