import React, { Component } from 'react';

class Arrow extends Component {
	constructor(props) {
		super(props);

		this.state = {
			id: this.props.id,
			status: false
		};
	}

	toggleArrow = function(e) {
		let arrow = e.target;
		arrow.classList.toggle('closed');

		this.setState({ status: !this.state.status });
		this.props.callback(this.state.status, e);
	}.bind(this);

	render() {
		return (
			<a onClick={(e) => this.toggleArrow(e)} className={`${this.props.className || ""} arrow closed`}>
			</a>
		);
	}
}

export default Arrow;
