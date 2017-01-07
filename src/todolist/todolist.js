import React from 'react'
import FilterContainer from './filter/filter.container'
import TodosContainer from './todos/todos.container'
import ControlContainer from './control/control.container'


class Todolist extends React.Component {
	render () {
		return (
		<div>	
			<FilterContainer />
			<ControlContainer />
			<TodosContainer />
		</div>	
			)
	}
}


export default Todolist 