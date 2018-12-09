import React from 'react';
import moment from 'moment'

import Vod from './Vod';

const VodList = ({ vods, setTimestampsByVod, collapse }) => {

  return (
    <ul className="list-reset">
      { !collapse && Object.keys(vods).map(key => {
        console.log(vods, vods[key].timestamps)
        return(
          <Vod
            key={key}
            vod={vods[key]}
            setTimestampsByVod={setTimestampsByVod}
          />
        );
      }
      )}
    </ul>
  )
}

export default VodList;
