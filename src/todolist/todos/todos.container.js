
import Todos from './todos'
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
	return {
		todos : state.todos
	}
}


export default connect(mapStateToProps)(Todos)