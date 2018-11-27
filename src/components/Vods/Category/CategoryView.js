import React, { Component } from 'react';
import { timestamps } from '../../../config/api';
import moment from 'moment';

class CategoryView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dates: {},
      timestampList: [],
      categories: {},

    }

    this.toggleCategory = this.toggleCategory.bind(this);
  }

  componentDidMount() {
    const timestampList = [];
    const unordered_categories = {};
    const categories = {};

    fetch(timestamps)
      .then(response => response.json())
      .then(timestamp => {
        timestampList.push(...timestamp)

        Object.keys(timestamp).forEach(key => {
          unordered_categories[timestamp[key].category] = false
          unordered_categories[this.props.category] = true
        })

        Object.keys(unordered_categories).sort().forEach(key => {
          categories[key] = unordered_categories[key]
        })
      })
      .then(() => {
        this.setState({ timestampList, categories })
      })
  }

  toggleCategory(category) {
    this.setState(prevState => ({
      categories: {
        ...prevState.categories,
        [category]: true
      }
    }))
    this.props.setCategory(category)
  }

  render() {
    const { categories } = this.state;

    console.log(categories)



    return(
      <div>
        { Object.keys(categories).sort((a,b) => {return a - b}).map(category =>
          <div key={category} className="mb-1 mx-1 p-2 bg-black shadow-md block text-grey border border-grey-darkest">
            <p className="text-center cursor-pointer" onClick={() => this.toggleCategory(category)}>
              {category}
            </p>
            {/*dates[date] && <CategoryList category={category} vods={this.props.vods} />*/}
          </div>
        )}
      </div>
    );
  }
}

export default CategoryView;
