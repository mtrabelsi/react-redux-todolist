import React from 'react'
import Todo from './todo'

class Todos extends React.Component {
	render () {
		return (
			<ul>
				{
				  this.props.todos.map( todo => {
					return <Todo key={todo.id} text={todo.text} completed={todo.completed} />
				  })
				}
				
			</ul>
			)
	}
}

export default Todos