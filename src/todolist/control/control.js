
import React from 'react'

class Control extends React.Component {
	constructor (props) {
		super(props)
		this.handleCahnge = this.handleCahnge.bind(this)
	}
	handleCahnge (e) {
		this.textValue = e.target.value
	}
	render () {
		return (
			<div>
			<input type='text' onChange={this.handleCahnge}/> <button onClick={() => this.props.addTodo(this.textValue) } >+</button>
			</div>
			)
	}
}


export default Control