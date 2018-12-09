import { connect } from 'react-redux';
import {
  setSidebarView,
  setSidebarDateMonth,
  setSidebarDate,
  setSidebarDatePart,
  setSidebarCategory,
  fetchCategories,
  fetchTimestamps,
  fetchVods
} from '../actions';

import Sidebar from '../components/Sidebar/Sidebar';

const mapStateToProps = (state) => {
  return {
    sidebar: state.sidebar,
    categories: state.sidebar.categories,
    vods: state.sidebar.vods,
    date: state.sidebar.date
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onViewClick: view => {
      dispatch(setSidebarView(view))
    },
    onDateClick: (part, value) => {
      dispatch(setSidebarDate(part, value))
    },
    fetchCategories: () => {
      dispatch(fetchCategories())
    },
    onDatePartClick: (part) => {
      dispatch(setSidebarDatePart(part))
    },
    onCategoryClick: (category) => {
      dispatch(setSidebarCategory(category))
    },
    fetchTimestamps: (filter, value) => {
      dispatch(fetchTimestamps(filter, value))
    },
    fetchVods: (filter, value) => {
      dispatch(fetchVods(filter, value))
    }
  }
}

const SidebarContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Sidebar);

export default SidebarContainer;
