 const addTodoNextState = (state, action) => {

	let todos = state.map(el => el)
    todos.push({id: todos.length, text: action.val, completed: false})

    return todos
}

 const clickTodo = (state,  action) => {
	return Object.assign({}, state.map( todo =>{
		if ( todo.id === action.val ) {
			return {id: todo.id, text : todo.text, completed: !todo.completed}
		} else {
			return todo
		}
	}))

}

export { clickTodo, addTodoNextState } 
