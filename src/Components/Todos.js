import React, { Component } from 'react';
import TodItem from './TodItem';
import PropTypes from 'prop-types';

class Todos extends Component {
	render() {
		const { todos } = this.props;
		return todos.map((todo) => (
			<TodItem
				key={todo.id}
				todo={todo}
				markComplete={this.props.markComplete}
				delItem={this.props.delItem}
			/>
		));
	}
}

Todos.propTypes = {
	todos: PropTypes.array.isRequired,
	markComplete: PropTypes.func.isRequired,
	delItem: PropTypes.func.isRequired,
};

export default Todos;
