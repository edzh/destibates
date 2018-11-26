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
    const unordered_dates = {}
    const dates = {}

    Object.keys(vods).forEach(key => {
      // unordered_dates[moment(vods[key].date).format('YYYY-MM-DD')] = false
      unordered_dates[vods[key].date] = false;
    })

    Object.keys(unordered_dates).sort((a,b) => {return new Date(b) - new Date(a)})
    .forEach(key => {
      dates[moment(key).format('YYYY-MM-DD')] = unordered_dates[key]
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
    const { dates } = this.state;



    return(
      <div>
        {Object.keys(dates).map(date =>
          <div key={date} className="mb-1 mx-1 p-2 bg-black shadow-md block text-grey border border-grey-darkest">
            <p className="text-center cursor-pointer" onClick={() => this.toggleDate(date)}>
              {moment(date).format('YYYY-MM-DD')}
            </p>
            {dates[date] && <DateList date={date} vods={this.props.vods} />}
          </div>
        )}
      </div>
    );
  }
}

export default DateView;
