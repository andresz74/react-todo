import React from 'react';

import TodoItem from './TodoItem';

const Todos = ({ todos, markComplete, deleteTodo }) => {
	return (
		<>
			{todos.map(todo => (
				<TodoItem todo={todo} key={todo.id} markComplete={markComplete} deleteTodo={deleteTodo} />
			))}
		</>
	);
};

export default Todos;
