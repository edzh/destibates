import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

class Timestamp extends React.Component {
  constructor(props) {
    super(props);


    this.displayMatches = this.displayMatches.bind(this)
  }



  displayMatches(query, string) {

    const invalid = /[°"§%()\[\]{}=\\?´`'#<>|,;.:+_-]+/g;
    query = query.replace(invalid, '');

    const regex = new RegExp(query, 'gi')
    const match = string.replace(regex, `<span class="bg-grey-lightest text-grey-darkest">${query}</span>`)

    return match;
  }

  render() {
    const { currentVod, query, currentTimestamp, timestamp, onTimestampClick } = this.props;
    const { _id, vodId, category, topic } = timestamp;

    return(
      <NavLink to={_id} >
        <div
          onClick={() => onTimestampClick(vodId, timestamp.timestamp)}
          className={`px-2 py-2 mt-2 mx-2 cursor-pointer hover:text-white ${currentTimestamp === timestamp.timestamp && currentVod === vodId? 'bg-grey-darkest' : 'bg-black'} text-grey border border-grey-darkest rounded`}>
          <div className="flex">
            <p
              className="w-2/3 h-12 font-semibold text-white"
              dangerouslySetInnerHTML={{ __html: ( query ? this.displayMatches(query, category) : category ) }}
            />
            <p className="w-1/3 text-right mb-1">{timestamp.timestamp}</p>
          </div>

          <p dangerouslySetInnerHTML={{ __html: ( query ? this.displayMatches(query, topic) : topic ) }} />
        </div>

      </NavLink>
    );
  }
}

Timestamp.propTypes = {
  currentVod: PropTypes.string,
  currentTimestamp: PropTypes.string,
  query: PropTypes.string,
  onTimestampClick: PropTypes.func.isRequired,
  timestamp: PropTypes.object.isRequired
}

export default Timestamp;
