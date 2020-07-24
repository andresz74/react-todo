import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Todos from './components/todo/Todos';
import Header from './components/layout/Header';
import AddTodo from './components/todo/AddTodo';
import About from './components/pages/About';

const initialState = [];

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
		//
		fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
			method: 'DELETE',
		})
			.then(response => response.json())
			.then(() => setTodos([...todos.filter(todo => todo.id !== id)]));
	};
	const addNewTodo = title => {
		if (title !== '') {
			fetch('https://jsonplaceholder.typicode.com/todos', {
				method: 'POST',
				headers: {
					'Content-type': 'application/json; charset=UTF-8',
				},
				body: JSON.stringify({ title, completed: false }),
			})
				.then(response => response.json())
				.then(data => setTodos([...todos, data]));
		}
	};
	React.useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
			.then(response => response.json())
			.then(data => setTodos(data));
	}, []);
	return (
		<Router>
			<div className="App">
				<Header />
				<Route
					exact
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
