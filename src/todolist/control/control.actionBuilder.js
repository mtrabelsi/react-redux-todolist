const addTodo = (value) => ({type:'ADD_TODO', val: value})
const clickTodo = (val) => ({type:'CLICK_TODO', val : val})
export  { addTodo, clickTodo }