import React, { Component } from 'react';
import Timestamp from './Timestamp'

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      query: '',
      results: props.timestampsByVod,
    }

    this.handleChange = this.handleChange.bind(this);
    this.displayMatches = this.displayMatches.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value })
    const { timestampsByVod } = this.props;
    const results = []
    const { query } = this.state;

    const search = timestampsByVod.filter(timestamp => {
      const regex = new RegExp(query, 'gi')
      return timestamp.category.match(regex) || timestamp.topic.match(regex)
    })

    if (query === '') {
      this.setState({ results: timestampsByVod })
      this.props.setSearch(false);
    } else {
      this.setState({ results: search })
      this.props.setSearch(true);
    }

  }

  displayMatches(query, string) {
    const regex = new RegExp(query, 'gi')
    console.log(regex);
    const match = string.replace(regex, `<span class="bg-grey-lightest text-grey-darkest">${query}</span>`)

    return match;
  }

  render() {
    const { query, results } = this.state;

    return(
      <div>
        <input placeholder="Search" type="text" value={query} name="query" onChange={this.handleChange}/>
        { this.props.search && <div className="mx-1 overflow-auto" style={{height: "720px"}}>
          { Object.keys(results).map(key =>
            <Timestamp topic={this.displayMatches(query, results[key].topic)} category={results[key].category} timestampId={results[key]._id} vod={this.props.vod} time={results[key].timestamp} />
          )}
          </div>
        }
      </div>
    );
  }
}

export default Search;
