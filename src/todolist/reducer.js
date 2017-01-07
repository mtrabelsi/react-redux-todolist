import todos from './control/control.reducer'
import filters from './filter/filter.reducer'
import { combineReducers } from 'redux'


export default combineReducers ({
	todos,
	filters
})