import React from 'react'


class Todo extends React.Component {
	render () {
		return (
			<li>
				<input type='checkbox' onClick={(e)=>this.props.clickTodo(this.props.id)} checked={this.props.completed} /> 
				{this.props.text}
			</li>
			)
	}
}


export default Todo