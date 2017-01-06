import { addTodoNextState, clickTodo } from './control.reducer.nextState'

const controlReducer = (state = [],  action) => {
	switch (action.type) {
		case 'ADD_TODO' : {
			return addTodoNextState(state, action)
		    break
		}
		case 'CLICK_TODO' : {
			return clickTodo(state, action)
			break
		}
		default : return state
	}
}


export default controlReducer