import Fluxxor from 'fluxxor'
import * as Constants from '../constants/Constants'

var TodoStore = Fluxxor.createStore({
	initialize: function(){
		this.todoId = 0;
		this.todos = {};
		
		this.bindActions(
			Constants.ADD_TODO, this.onAddTodo,
			Constants.TOGGLE_TODO, this.onToggleTodo,
			Constants.CLEAE_TODO, this.onClearTodos
		);
	},

	onAddTodo: function(payload){
		var id = this._nextTodoId();
		
		var todo = {
			id: id,
			text: payload.text,
			complete: false
		};
		this.todos[id] = todo;
		this.emit("change");
	},

	onToggleTodo: function(payload) {
		var id = payload.id;
		
		this.todos[id].completed = !this.todos[id].completed;
		
		this.emit('change');
	},

	onClearTodos: function(payload){
		var todos = this.todos;
		
		Object.keys(todos).forEach(function(key){
			if(todos[key].completed) {
				delete todos[key]
			}
		});

		this.emit("change");
	},
	
	getState: function() {
		return {
			todos: this.todos
		};
	},
	
	_nextTodoId: function() {
		return ++this.todoId;
	}
});

export default TodoStore;