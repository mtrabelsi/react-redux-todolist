
import Filter from './filter'
import { visibilityFilter, shearchFilter } from './filter.actionBuilder'
import { connect } from 'react-redux'

const mapDispatchToProps = (dispatch) => {
	return {
		filter : filterBy => dispatch(visibilityFilter(filterBy)),
		search : text => dispatch(shearchFilter(text))
	}
}


export default connect(undefined, mapDispatchToProps)(Filter)