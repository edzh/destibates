import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import VodList from '../../../containers/VodContainer';

const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

class DayList extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      vodsByDay: {}
    }

    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    const { vods } = this.props;
    const unorderedVodsByDay = {};
    const vodsByDay = {};

    Object.keys(vods).forEach(key => {
      const dayNumber = moment(vods[key].date).format('D')

      if (unorderedVodsByDay[dayNumber]) {
        unorderedVodsByDay[dayNumber] = {
          ...unorderedVodsByDay[dayNumber],
          weekday: moment(vods[key].date).day(),
          vods: [
            ...unorderedVodsByDay[dayNumber].vods,
            vods[key]
          ]
        }
      } else {
        unorderedVodsByDay[dayNumber] = {
          collapse: true,
          weekday: moment(vods[key].date).day(),
          vods: [vods[key]]
        }
      }
    })

    Object.keys(unorderedVodsByDay).sort((a,b) => {return parseInt(b) - parseInt(a)})
    .forEach(key => {
      vodsByDay[key] = unorderedVodsByDay[key]
    })
    console.log(vodsByDay)
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

    // return (<div>a</div>)
    return (
      <ul className="list-reset">
        { Object.keys(vodsByDay).map(day =>
          <li
            className="py-2 text-grey-light border border-grey-darker border-t-0 border-l-0 border-r-0 flex"
            key={day}
          >
            <div className="w-full">
              <div className="ml-2 flex" onClick={() => this.handleClick(day)}>
                <p className="w-4 mr-3 text-right">{day}</p>
                <p>{weekdays[vodsByDay[day].weekday]}</p>
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


// const DayList = ({ onDateClick, onDatePartClick, date, vods }) => {
//   const monthNumber = moment(date.month, 'MMMM').format('M');
//   const numberOfDays = new Date(date.year, monthNumber, 0).getDate()
//   const days = [];

//   for (let i = numberOfDays; i > 0; i--) {
//     days.push({
//       number: i,
//       weekday: weekdays[new Date(date.year, monthNumber, i).getDay()]
//     })
//   }

//   return(
//     <ul className="list-reset">
//       { Object.keys(days).map(day =>
//         <li
//           className="py-2 text-grey-light border border-grey-darker border-t-0 border-l-0 border-r-0 flex"
//           key={day}
//           onClick={() => {
//             onDateClick('day', days[day].number);
//           }}
//         >
//           <div className="w-full">
//             <div className="ml-2 flex">
//               <p className="w-4 mr-3 text-right">{days[day].number}</p>
//               <p>{days[day].weekday}</p>
//             </div>
//           </div>
//         </li>
//       )}
//     </ul>
//   );
// }

DayList.propTypes = {

}

export default DayList;
