import React from 'react'



class Filter extends React.Component {

	render () {
		return (
			<div>
				<button onClick={() => this.props.filter('ALL')}> All </button>
				<button onClick={() => this.props.filter('ACTIVE')}> Active </button>
				<button onClick={() => this.props.filter('FINISHED')}> Finished </button>
				<input type='text' onChange={(e) => this.props.search(e.target.value) }/>
			</div>
			)
	}
}


export default Filter