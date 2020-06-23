import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Todos from './Components/Todos';
import Header from './Components/Layout/Header';
import AddTodo from './Components/AddTodo';
import About from './Components/Pages/About';

import './App.css';
// import { v4 as uuid } from 'uuid';
import axios from 'axios';

class App extends Component {
	state = {
		todos: [],
	};

	async componentDidMount() {
		const res = await axios.get(
			'https://jsonplaceholder.typicode.com/todos?_limit=10'
		);

		this.setState({ todos: res.data });
	}

	markComplete = (id) => {
		this.setState({
			todos: this.state.todos.map((todo) => {
				if (todo.id === id) {
					todo.completed = !todo.completed;
				}
				return todo;
			}),
		});
	};

	delItem = async (id) => {
		await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);
		this.setState({
			todos: [...this.state.todos.filter((todo) => todo.id !== id)],
		});
	};

	addTodo = async (title) => {
		const res = await axios.post('https://jsonplaceholder.typicode.com/todos', {
			title,
			completed: false,
		});

		this.setState({ todos: [...this.state.todos, res.data] });
	};

	render() {
		const { todos } = this.state;
		return (
			<Router>
				<div className="App">
					<div className="container">
						<Header />
						<Route
							exact
							path="/"
							render={(props) => (
								<Fragment>
									<Todos
										markComplete={this.markComplete}
										delItem={this.delItem}
										todos={todos}
									/>
									<AddTodo addTodo={this.addTodo} />
								</Fragment>
							)}
						/>
						<Route path="/about" component={About} />
					</div>
				</div>
			</Router>
		);
	}
}

export default App;
