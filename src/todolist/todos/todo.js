import React from 'react'


class Todo extends React.Component {
	render () {
		return (
			<li>
				<input type='checkbox' onClick={(e)=>this.props.clickTodo(this.props.id)} /> 
				{this.props.text}
			</li>
			)
	}
}


export default Todo