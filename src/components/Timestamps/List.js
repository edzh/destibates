import React, { Component } from 'react';

import Timestamp from './Timestamp';

class List extends Component {
  constructor(props) {
    super(props);

    this.state = {
      vods: this.props.timestampsByVod
    }

    this.handleSearch = this.handleSearch.bind(this);
    this.displayMatches = this.displayMatches.bind(this);
  }

  handleSearch(query) {
    const { timestampsByVod } = this.props;

    const results = timestampsByVod.filter(timestamp => {
      const regex = new RegExp(query, 'gi')
      if (query === '') {
        return timestampsByVod
      }
      return timestamp.category.match(regex) || timestamp.topic.match(regex)
    })

    return results;
  }

  displayMatches(query, string) {
    const regex = new RegExp(query, 'gi')
    const match = string.replace(regex, `<span class="bg-grey-lightest text-grey-darkest">${query}</span>`)

    return match;
  }

  render() {
    const { timestampsByVod, query } = this.props;

    const vods = this.handleSearch(query)

    return(
      <div className="overflow-auto" style={{height: "720px"}}>
        { Object.keys(vods).map(key =>
          <div key={key}>
            <Timestamp
              topic={this.displayMatches(query, vods[key].topic)}
              category={this.displayMatches(query, vods[key].category)}
              timestampId={vods[key]._id}
              vod={this.props.vod}
              time={vods[key].timestamp}
            />
          </div>
        )}
      </div>
    );
  }
}

export default List;
