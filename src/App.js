import React from 'react';
import './App.css';
import Todos from './components/todo/Todos';
import Header from './components/layout/Header';
import AddTodo from './components/todo/AddTodo';
import { uuid } from './utility';

const initialState = [
	{
		id: uuid(),
		title: 'Take out the trash',
		completed: false,
	},
	{
		id: uuid(),
		title: 'Dinner with wife',
		completed: true,
	},
	{
		id: uuid(),
		title: 'Meeting with boss',
		completed: false,
	},
];

function App() {
	const [todos, setTodos] = React.useState(initialState);
	const markComplete = id => {
		setTodos(
			todos.map(todo => {
				if (todo.id === id) {
					todo.completed = !todo.completed;
				}
				return todo;
			}),
		);
	};
	const deleteTodo = id => {
		setTodos([...todos.filter(todo => todo.id !== id)]);
	};
	const AddNewTodo = title => {
		if (title !== '') {
			setTodos([...todos, { title, id: uuid(), completed: false }]);
		}
	};
	return (
		<div className="App">
			<Header />
			<AddTodo AddNewTodo={AddNewTodo} />
			<Todos todos={todos} markComplete={markComplete} deleteTodo={deleteTodo} />
		</div>
	);
}

export default App;
