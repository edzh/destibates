import React, { Component } from 'react';
import Timestamp from './Timestamp'

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      query: null,
      results: props.timestampsByVod,
    }

    this.handleChange = this.handleChange.bind(this);
    this.displayMatches = this.displayMatches.bind(this);
  }

  handleChange(event) {
    const { timestampsByVod } = this.props;
    const { query } = this.state;
    const results = []

    this.setState({
      [event.target.name]: event.target.value
    })

    const search = timestampsByVod.filter(timestamp => {
      const regex = new RegExp(query, 'gi')
      return timestamp.category.match(regex) || timestamp.topic.match(regex)
    })

    if (query === null || '') {
      this.setState({ results: timestampsByVod })
    } else {
      this.setState({ results: search })
    }

  }

  displayMatches(query, string) {
    if (query === '') {
      query = null;
    }
    const regex = new RegExp(query, 'gi')
    const match = string.replace(regex, `<span class="bg-blue text-white">${query}</span>`)

    return match;
  }

  render() {
    const { query, results } = this.state;

    return(
      <div>
        <input type="text" value={query} name="query" onChange={this.handleChange}/>
        { Object.keys(results).map(key =>
          <Timestamp topic={this.displayMatches(query, results[key].topic)} category={results[key].category} timestampId={results[key]._id} vod={this.props.vod} time={results[key].timestamp} />
        )}
      </div>
    );
  }
}

export default Search;
