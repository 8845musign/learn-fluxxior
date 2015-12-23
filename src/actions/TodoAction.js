import * as Constants from '../constants/constants'

export default {
	addTodo: function(text) {
		this.dispatch(Constants.ADD_TODO, {text: text});
	},

	toggleTodo: function(id) {
		this.dispatch(Constants.TOGGLE_TODO, {id: id});
	},

	clearTodos: function(text) {
		this.dispatch(Constants.CLEAE_TODO);
	}
}