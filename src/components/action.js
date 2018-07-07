import React, { Component } from 'react';

import Icon from './icon';

class Action extends Component {
	constructor(props) {
		super(props);

		this.status = false;
	}

	handleAction = function(e) {
		this.props.onClick();
		let action = e.target;
		action.classList.toggle('remove'); // uses classes rather than ID's
		this.status = !this.status; // not needed, but kept
	}.bind(this);

	render() {
		return (
			<a onClick={(e) => this.handleAction(e) } className={`${this.props.className || ""} action`}>
			</a>
		);
	}
}

export default Action;

// return (
// 			<button onClick={() => this.props.onClick()} className={`${this.props.className} action`}>
// 				{ Icon('fas fa-plus-circle', 'action') }
// 				{/* fas fa-times-circle */}
// 			</button>
// 		);
