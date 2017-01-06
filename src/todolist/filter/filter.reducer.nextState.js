 const filter = (state, action) => {
	return Object.assign({}, {visibilityFilter : action.val, lastSearch : state.lastSearch} )
}

 const search = (state, action) => {
	return Object.assign({}, {visibilityFilter: state.visibilityFilter, lastSearch: action.val} )
}

export {filter, search}