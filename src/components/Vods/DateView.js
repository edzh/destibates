import React, { Component } from 'react';
import moment from 'moment';

import DateList from './DateList';

class DateView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dates: {},

    }

    this.toggleDate = this.toggleDate.bind(this);
  }

  componentDidMount() {
    const { vods } = this.props
    const dates = {}

    Object.keys(vods).forEach(key => {
      dates[moment(vods[key].date).format('YYYY-MM-DD')] = false
    })

    this.setState({dates})
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
    // this.props.vods && this.setDates();

    const { dates } = this.state;



    return(
      <div className="overflow-auto mr-2">
        {!!dates && Object.keys(dates).map(date =>
          <div key={date} className="mb-2 p-2 bg-black shadow-md block text-grey">
            <p className="mb-2 cursor-pointer" onClick={() => this.toggleDate(date)}>
              {moment(date).format('YYYY-MM-DD')}
            </p>
            <div className={dates[date] ? '' : 'hidden'}>
              <DateList date={date} vods={this.props.vods} getVodId={this.props.getVodId} />
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default DateView;
