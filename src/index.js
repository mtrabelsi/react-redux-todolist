import React from 'react';
import ReactDOM from 'react-dom';
import Todolist from './todolist/todolist';
import './index.css';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import Reducer from './todolist/reducer'

let store = createStore(Reducer)

ReactDOM.render(
	<Provider store={store}>
  		<Todolist />
    </Provider>,
  document.getElementById('root')
);
