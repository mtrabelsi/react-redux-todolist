
import Todos from './todos'
import { clickTodo } from './../control/control.actionBuilder'
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
	return {
		todos : state.todos
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		clickTodo: id => dispatch(clickTodo(id))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Todos)