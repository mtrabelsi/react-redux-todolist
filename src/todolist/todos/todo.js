import React from 'react'


class Todo extends React.Component {
	render () {
		return (
			<li>
				<input type='checkbox' onChange={console.log} checked={this.props.completed} /> 
				{this.props.text}
			</li>
			)
	}
}


export default Todo