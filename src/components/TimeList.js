import React, { Component } from 'react';

const video = "311132964";
const times = [
  "0:00:00",
  "0:02:04",
  "0:08:39",
  "2:12:24",
  "2:23:25",
  "2:35:21",
  "3:08:05",
  "3:16:28",
  "3:20:24",
  "4:14:07",
  "4:56:48",
  "5:04:38",
  "5:07:55",
  "5:15:56",
  "5:24:52",
]

function hmsToSecondsOnly(str) {
  var p = str.split(':'),
    s = 0, m = 1;

  while (p.length > 0) {
    s += m * parseInt(p.pop(), 10);
    m *= 60;
  }

  return s;
}

class TimeList extends Component {
  constructor(props) {
    super(props);

    this.changeTime = this.changeTime.bind(this);
  }

  changeTime(time) {
    this.props.handleChangeTime(time)
  }

  render() {
    const { handleChangeTime } = this.props;

    return(
      <div>
        <table>
        <tbody>
          <tr>
            <th>Timestamp</th>
          </tr>
          { Object.keys(times).map((time) =>
            <tr>
              <td onClick={() => this.changeTime(hmsToSecondsOnly(times[time]))}>{times[time]}</td>
            </tr>
          )}
        </tbody>
        </table>
      </div>
    )
  }
}

export default TimeList;
