import React from 'react';

import * as style from './TodoItem.style';

const TodoItem = ({ todo, markComplete, deleteTodo }) => {
	const { id, title } = todo;
	return (
		<div className={style.todoItemBox}>
			<input className={style.checkboxStyle} type="checkbox" onChange={markComplete.bind(this, id)} />
			<span className={style.getStyle(todo.completed)}>{title}</span>
			<button className={style.btnDelete} type="button" onClick={deleteTodo.bind(this, id)}>
				x
			</button>
		</div>
	);
};

export default TodoItem;
