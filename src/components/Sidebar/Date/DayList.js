import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import VodList from '../../../containers/VodContainer';

const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

class DayList extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      vodsByDay: []
    }

    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    const { vods } = this.props;
    const unorderedVodsByDay = {};
    const vodsByDay = [];

    Object.keys(vods).forEach(key => {
      const dayNumber = moment.utc(vods[key].date).format('D')

      if (unorderedVodsByDay[dayNumber]) {
        unorderedVodsByDay[dayNumber] = {
          ...unorderedVodsByDay[dayNumber],
          weekday: moment.utc(vods[key].date).day(),
          day: dayNumber,
          vods: [
            ...unorderedVodsByDay[dayNumber].vods,
            vods[key]
          ]
        }
      } else {
        unorderedVodsByDay[dayNumber] = {
          collapse: true,
          weekday: moment.utc(vods[key].date).day(),
          day: dayNumber,
          vods: [vods[key]]
        }
      }
    })

    Object.keys(unorderedVodsByDay)
    .sort((a,b) => {return parseInt(b) - parseInt(a)})
    .forEach(key => {
      vodsByDay.push(unorderedVodsByDay[key])
    })

    this.setState({vodsByDay})
  }

  handleClick(day) {
    this.setState(prevState => ({
      vodsByDay: {
        ...prevState.vodsByDay,
        [day]: {
          ...prevState.vodsByDay[day],
          collapse: !this.state.vodsByDay[day].collapse
        }

      }
    }))
  }

  render() {
    const { onDateClick, onDatePartClick, date, vods } = this.props
    const { vodsByDay } = this.state;

    return (
      <ul className="list-reset bg-black">
        { Object.keys(vodsByDay).map(day =>
          <li
            className="py-2 text-grey-light border border-grey-darker border-t-0 border-l-0 border-r-0"
            key={day}
          >
            <div className="w-full">
              <div className="ml-2 flex" onClick={() => this.handleClick(day)}>
                <p className="w-4 mr-3 text-right">{vodsByDay[day].day}</p>
                <p>{weekdays[vodsByDay[day].weekday]}</p>
                <p className="ml-auto text-xs"><span className="text-grey-lightest">{vodsByDay[day].vods.length}</span> VODs</p>
                <p className="ml-3 mr-3">{vodsByDay[day].collapse ? '\u25b8' : '\u25be'}</p>
              </div>
              <div><VodList vods={vodsByDay[day].vods} collapse={vodsByDay[day].collapse}/></div>
            </div>
          </li>
          )
        }
      </ul>
    );
  }
}

DayList.propTypes = {

}

export default DayList;
