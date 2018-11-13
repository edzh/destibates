import React, { Component } from 'react';
import moment from 'moment';

import DateList from './DateList';

class DateView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dates: {}
    }
  }

  componentDidMount() {
    const { vods } = this.props;
    Object.keys(vods).forEach(key => {
      this.setState(prevState => ({ dates: {
        ...prevState.dates,
        [vods[key].date]: false }
      }))
    })
  }

  toggleDate(date) {
    this.setState(prevState => ({
      dates: {
        ...prevState.dates,
        [date]: !this.state.dates[date]
      }
    }))
  }

  render() {
    const { dates } = this.state;
    // console.log(dates)
    return(
      <div className="overflow-auto mr-2">
        {Object.keys(dates).map(date =>
          <div key={date} className="mb-2 p-2 bg-black shadow-md block text-grey">
            <p className="mb-2 cursor-pointer" onClick={() => this.toggleDate(date)}>{moment(date).format('YYYY-MM-DD')}</p>
            <div className={dates[date] ? '' : 'hidden'}>
              <DateList date={date} />
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default DateView;
