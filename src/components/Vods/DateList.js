import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import moment from 'moment';

class DateList extends Component {
  constructor(props) {
    super(props)
  }


  render() {
    const { date, vods } = this.props;

    return(
      <div>
        { Object.keys(vods)
          .filter(vod => moment(vods[vod].date).format('YYYY-MM-DD') === date)
          .map(vod =>
            <NavLink
              key={vod}
              className="text-center mt-2 p-2 bg-grey-darkest shadow-md block text-grey hover:text-white no-underline"
              activeClassName="bg-grey-darker"
              to={`/vods/${vods[vod]._id}`}
            >
              {moment(vods[vod].date).format('LT')}
            </NavLink>
          )
        }
      </div>
    );
  }
}

export default DateList;
