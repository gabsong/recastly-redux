import { connect } from 'react-redux'
import Search from './../components/Search.js'
import handleVideoSearch from '../actions/search.js'

// TODO: define a SearchContainer component which will hook up your action
// dispatchers with your search component props.
// HINT: use react-redux 'connect' method to generate a container component from
// state and dispatch mappings.
const mapStateToProps = (state) => ({
  value: state.value
})

const mapDispatchToProps = (dispatch) => ({
  handleSearchInputChange: (q) => {
    dispatch(handleVideoSearch(q))
  }
})

const SearchContainer = connect(mapStateToProps, mapDispatchToProps)(Search)

export default SearchContainer
