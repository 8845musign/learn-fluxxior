import Fluxxor from 'fluxxor'
import React from 'react'
import TodoItem from './TodoItem.jsx'

let FluxMixin = Fluxxor.FluxMixin(React);
let StoreWatchMixin = Fluxxor.StoreWatchMixin;

let Todo = React.createClass({
	mixins: [FluxMixin, StoreWatchMixin('TodoStore')],
	
	getInitialState: function(){
		return { newTodoText: '' };
	},
	
	getStateFromFlux: function() {
		let flux = this.getFlux();	
		return flux.store('TodoStore').getState();
	},
	
	render: function() {
		var todos = this.state.todos;
		return (
			<div>
				<ul>
					{Object.keys(todos).map(function(id){
						return <li key={id}><TodoItem todo={todos[id]} /></li>;
					})}
				</ul>
				<form onSubmit={this.onSubmitForm}>
					<input type="text" size="30" placeholder="New Todo" value={this.state.newTodoText} onChange={this.handleTodoTextChange} />
					<input type="submit" value="Add Todo" />
				</form>
				<button type='button' onClick={this.clearCompletedTodos}>Clear Completed</button>
			</div>
		)
	},
	
	handleTodoTextChange: function(e){
		this.setState({newTodoText: e.target.value});
	},
	
	onSubmitForm: function(e) {
		e.preventDefault();
		
		if(this.state.newTodoText.trim()){
			this.getFlux().actions.addTodo(this.state.newTodoText);
			this.setState({newTodoText: ""});
		}
	},
	
	clearCompletedTodos: function(e){
		this.getFlux().actions.clearTodos();
	}
});

export default Todo