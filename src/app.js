import React from 'react'
import ReactDom from 'react-dom'
import Fluxxor from 'fluxxor'
import TodoStore from './stores/TodoStore'
import actions from './actions/TodoAction'
import Todo from './components/Todo.jsx'

let stores = {
	TodoStore: new TodoStore()
}

let flux = new Fluxxor.Flux(stores, actions);
flux.on('dispatch', function(type, payload){
	if (console && console.log) {
		console.log("[Dispatch]", type, payload);
	}
});

ReactDom.render(
	<Todo flux={flux} />,
	document.getElementById('app')
);