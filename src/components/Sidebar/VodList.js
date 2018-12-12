import React from 'react';
import moment from 'moment'

import Vod from './Vod';

const VodList = ({ vod, vods, setTimestampsByVod, onVodClick, currentVod, collapse }) => {

  return (
    <ul className="list-reset">
      { !collapse && Object.keys(vods).map(key => {
        return(
          <Vod
            key={key}
            vod={vods[key]}
            currentVod={currentVod}
            setTimestampsByVod={setTimestampsByVod}
            onVodClick={onVodClick}
          />
        );
      }
      )}
    </ul>
  )
}

export default VodList;
