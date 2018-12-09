import React from 'react';
import moment from 'moment'
import TimestampList from '../../containers/TimestampContainer';

class Vod extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collapse: true
    }

    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    // const { vod: { timestamps } } = this.props

    // console.log(timestamps);
  }

  handleClick() {
    this.setState({ collapse: !this.state.collapse })
  }

  render() {
    const { vod, setTimestampsByVod } = this.props;

    return(
      <li onClick={() => setTimestampsByVod(vod.timestamps)}>
        <p onClick={() => this.handleClick()} className="bg-grey-lighter rounded text-grey-darkest py-1 m-1 text-center">{ moment(vod.date).format('LT') }</p>
        { !this.state.collapse && <TimestampList /> }
      </li>
    );
  }
}

// const Vod = ({ vod, onVodClick, fetchTimestamps, timestamps }) => {
//     return(
//       <li
//         className=""
//         onClick={() => {
//           // fetchTimestamps('vodId', currentVod.vodId);
//           // onVodClick(currentVod.vodId);
//         }}
//       >
//         <p className="bg-grey-lighter rounded text-grey-darkest py-1 m-1 text-center">{ moment(vod.date).format('LT') }</p>

//       </li>
//       );

// }

export default Vod;
