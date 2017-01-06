
import { addTodo, clickTodo } from './control.actionBuilder'
import Control from './control'
import { connect } from 'react-redux'

const mapDispatchToProps = (dispatch) => {
return	{
		addTodo : value => dispatch(addTodo(value))
	}
}


export default connect(undefined, mapDispatchToProps) (Control)