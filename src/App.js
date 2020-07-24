import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Todos from './components/todo/Todos';
import Header from './components/layout/Header';
import AddTodo from './components/todo/AddTodo';
import { uuid } from './utility';
import About from './components/pages/About';

const initialState = [
	{
		id: uuid(),
		title: 'Take out the trash',
		completed: false,
	},
	{
		id: uuid(),
		title: 'Dinner with wife',
		completed: false,
	},
	{
		id: uuid(),
		title: 'Meeting with boss',
		completed: false,
	},
];

const App = () => {
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
	const addNewTodo = title => {
		if (title !== '') {
			setTodos([...todos, { title, id: uuid(), completed: false }]);
		}
	};
	return (
		<Router>
			<div className="App">
				<Header />
				<Route exact
					path="/"
					render={() => (
						<>
							<AddTodo addNewTodo={addNewTodo} />
							<Todos todos={todos} markComplete={markComplete} deleteTodo={deleteTodo} />
						</>
					)}
				/>
				<Route path="/about" component={About} />
			</div>
		</Router>
	);
};

export default App;
