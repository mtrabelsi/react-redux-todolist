import todos from './control/control.reducer'
import filter from './filter/filter.reducer'
import { combineReducers } from 'redux'


export default combineReducers ({
	todos,
	filter
})