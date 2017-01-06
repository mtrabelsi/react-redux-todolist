import React from 'react'
import Filter from './filter/filter'
import TodosContainer from './todos/todos.container'
import ControlContainer from './control/control.container'


class Todolist extends React.Component {
	render () {
		return (
		<div>	
			<Filter />
			<ControlContainer />
			<TodosContainer />
		</div>	
			)
	}
}


export default Todolist 