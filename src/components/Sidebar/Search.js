import React, { Component } from 'react';
import moment from 'moment';
// import TimestampList from '../../containers/TimestampListContainer';
import TimestampList from './TimestampList';

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      query: '',
      collapsed: false,
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleCollapse = this.handleCollapse.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });


  }

  handleSearch(query) {
    const { vods } = this.props;

    const invalid = /[°"§%()\[\]{}=\\?´`'#<>|,;.:+_-]+/g;
    query = query.replace(invalid, '');

    const results = [];

    vods.forEach(vod => {
      const resultsByVod = vod.timestamps.filter(timestamp => {
        const regex = new RegExp(query, 'gi')

        return timestamp.category.match(regex) || timestamp.topic.match(regex)
      })

      resultsByVod.length !== 0 && results.push({date: vod.date, vodId: vod.vodId, timestamps: resultsByVod})
    })

    return(results);
  }

  handleCollapse() {
    this.setState({ collapsed: !this.state.collapsed })
  }

  render() {
    const { query, collapsed } = this.state;

    const results = this.handleSearch(query);

    return(
      <div>
        <div className="flex">
          <input
            className="m-2 text-sm text-grey-lightest bg-grey-darkest p-2 rounded"
            placeholder="Search this month..."
            autoComplete="off"
            type="text"
            value={query}
            name="query"
            onChange={e => this.handleChange(e)}
          />
          { this.state.query !== '' && <span className="p-2 m-2 rounded bg-grey-darkest text-grey cursor-pointer" onClick={this.handleCollapse}>Hide {collapsed ? '\u25b8' : '\u25be' }</span> }
        </div>
        { this.state.query !== '' &&  <div className="mx-1 overflow-auto" >
          { !collapsed && Object.keys(results).map(key => [
              <div key={0} className="flex rounded bg-grey-darkest text-grey-light py-1 mx-2 mb-0 mt-2">
                <p className="mx-auto text-xs">{moment(results[key].date).format('MMMM DD LT')}</p>
              </div>,
              <TimestampList key={1} query={query} timestamps={results[key].timestamps}/>
            ]

            )
          }
          </div>
        }
      </div>
    );
  }
}

export default Search;
