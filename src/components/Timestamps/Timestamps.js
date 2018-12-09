import React, { Component } from 'react';
import { timestamps } from '../../config/api'

import Form from './Form';
import Search from './Search';
import List from './List';

class Timestamps extends Component {
  constructor(props) {
    super(props)

    this.state = {
      vod: this.props.vod,
      timestampsByVod: [],
      timestampsByCategory: [],
      query: '',
      loading: true
    }

    this.fetchTimestampsByVod = this.fetchTimestampsByVod.bind(this);
    this.fetchTimestampsByCategory = this.fetchTimestampsByCategory.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.props.type === "date" && this.fetchTimestampsByVod(this.props.vod);
    this.props.type === "category" && this.fetchTimestampsByCategory(this.props.category);
  }

  componentWillUpdate(nextProps) {
    if (nextProps.vod !== this.props.vod) {
      this.props.type === "date" && this.setState({ vod: nextProps.vod }, this.fetchTimestampsByVod(nextProps.vod))
    }

    if (nextProps.category !== this.props.category) {
      this.props.type === "category" && this.fetchTimestampsByCategory(nextProps.category)
    }
  }

  fetchTimestampsByVod(vod) {
    const timestampsByVod = [];
    fetch(`${timestamps}?vod=${vod}`)
      .then(response => response.json())
      .then(timestamp => {
        timestampsByVod.push(...timestamp)
        this.setState({ timestampsByVod })
      })
      .then(() => this.setState({ loading: false }))
  }

  fetchTimestampsByCategory(category) {
    const timestampsByCategory = [];
    fetch(`${timestamps}?category=${encodeURIComponent(category)}`)
      .then(response => response.json())
      .then(timestamp => {
        timestampsByCategory.push(...timestamp)
        this.setState({timestampsByCategory})
      })
      .then(() => {
        this.setState({ loading: false })
      })
  }


  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value })
  }

  render() {

    const { timestampsByVod, timestampsByCategory, query } = this.state;

    return(
      <div className="mx-1">
        <input
          type="text"
          className="bg-black text-grey-lightest mb-1 w-full p-2 rounded"
          placeholder="Search"
          value={query}
          name="query"
          onChange={this.handleChange}
        />
        { !this.state.loading &&
          this.props.type === "date" && <List vod={this.props.vod} timestampsByVod={timestampsByVod} query={query}/>
          || this.props.type === "category" && <List vod={this.props.vod} timestampsByVod={timestampsByCategory} query={query}/> }
        {/*<Form vod={this.props.vod} vodId={this.props.vodId} fetchTimestampsByVod={this.fetchTimestampsByVod} />*/}

      </div>
    );
  }
}

export default Timestamps;
