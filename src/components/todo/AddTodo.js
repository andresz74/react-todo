import React from 'react';

import * as style from './AddTodo.style';

const AddTodo = ({AddNewTodo}) => {
	const [newTitle, setNewTitle] = React.useState('');

	const onChangeTitle = e => {
		setNewTitle(e.target.value);
	};
	const onSubmitTodo = e => {
		e.preventDefault();
		AddNewTodo(newTitle);
		setNewTitle('');
	};
	return (
		<div className={style.addForm}>
			<input
				className={style.addItemEntry}
				type="text"
				name="title"
				placeholder="Add Todo..."
				value={newTitle}
				onChange={onChangeTitle}
			/>
			<button className={style.addButton} type="button" onClick={onSubmitTodo}>
				Add
			</button>
		</div>
	);
};

export default AddTodo;
