import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class TodItem extends Component {
	getStyle = () => {
		return {
			background: '#f4f4f4',
			padding: '10px',
			borderBottom: 'ipx #ccc dotted',
			textDecoration: this.props.todo.completed ? 'line-through' : 'none',
		};
	};

	render() {
		const { id, title } = this.props.todo;
		return (
			<div style={this.getStyle()}>
				<p>
					<input
						type="checkbox"
						onChange={this.props.markComplete.bind(this, id)}
					/>{' '}
					{title}
					<button onClick={this.props.delItem.bind(this, id)} style={btnStyle}>
						x
					</button>
				</p>
			</div>
		);
	}
}

const btnStyle = {
	background: '#ff0000',
	color: '#fff',
	border: 'none',
	padding: '5px 9px',
	borderRadius: '50%',
	cursor: 'pointer',
	float: 'right',
};

TodItem.propTypes = {
	todo: PropTypes.object.isRequired,
	markComplete: PropTypes.func.isRequired,
	delItem: PropTypes.func.isRequired,
};

export default TodItem;
