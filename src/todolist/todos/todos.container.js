
import Todos from './todos'
import { clickTodo } from './../control/control.actionBuilder'
import { connect } from 'react-redux'

const filter = (todos, currentFilter) => (
	todos.filter(todo => {
		if(currentFilter === 'ALL') {
			return Object.assign({}, todo)
		} else {
			if( (todo.completed && currentFilter === 'FINISHED') || (!todo.completed && currentFilter === 'ACTIVE') ) {
				return Object.assign({}, todo)
			}
		}
	})
)

const search =  (todos, text) => (
	todos.filter((el) => {
		if( text === el.text ) {
			return Object.assign({}, el)
		}
	})
)
const mapStateToProps = (state) => {
	let todos = filter(state.todos, state.filters.visibilityFilter)
	if ( state.filters.lastSearch != '' ) {
		todos = search(todos, state.filters.lastSearch)
	}
	return {
		todos : todos
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		clickTodo: id => dispatch(clickTodo(id))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Todos)