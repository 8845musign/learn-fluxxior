import Fluxxor from 'fluxxor'
import React from 'react'

let FluxMixin = Fluxxor.FluxMixin(React);
let StoreWatchMixin = Fluxxor.StoreWatchMixin;

var TodoItem = React.createClass({
	mixins: [FluxMixin],
	
	propTypes: {
		todo: React.PropTypes.object.isRequired
	},
	
	render: function() {
		let style = {
			textDecoration: this.props.todo.completed ? "line-through" : ""
		};
		
		return <span style={style} onClick={this.onClick}>{this.props.todo.text}</span>;
	},
	
	onClick: function(){
		this.getFlux().actions.toggleTodo(this.props.todo.id);	
	}
});

export default TodoItem