import {filter,  search} from './filter.reducer.nextState'

const filterReducer = (state = {visibilityFilter:'ALL', lastSearch: ''}, action) => {
	switch (action.type) {
		case 'FILTER' : {
			return filter(state, action)
			break
		}

		case 'SEARCH' : {
			return search(state,  action)
			break
		}
		default : return state
	}
}


export default filterReducer