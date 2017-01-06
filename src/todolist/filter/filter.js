import React from 'react'



class Filter extends React.Component {
	render () {
		return (
			<div>
			<button> All </button>
			<button> Active </button>
			<button> Finished </button>
			<input type='text' />
			</div>
			)
	}
}


export default Filter