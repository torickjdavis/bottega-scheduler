import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

import Icon from '../icon';
import Arrow from '../arrow';
import Action from '../action';

import AnimateHeight from 'react-animate-height';

class LibraryCourse extends Component {
	constructor(props) {
		super(props);

		this.state = {
			status: true,
			height: 0
		};
	}

	handleCallback = function(status, event) {
		// Refactor description render so false state is when it is closed, currently this is due to the Arrow.props.callback() being called before render() and state not being changed yet. (Delayed state change)
		// let course = document.querySelector('.library > .course');
		// using event targets rather than id selection
		let course = event.target.parentElement;
		course.classList.toggle('selected');

		let height = this.state.height == 0 ? 'auto' : 0;
		this.setState({ status, height });
	}.bind(this);

	render() {
		return (
			<div className="course">
				<header>
					<span className="title">{this.props.title}</span>
					{ Icon('fas fa-check', 'check')}
				</header>
				<Arrow callback={(status, event) => this.handleCallback(status, event)} id={this.props.id}/>
				<Action onClick={() => this.props.toggleEnrolled(this.props.id)}/>
				{/* Refactor to use CSS animations over AnimateHeight library */}
				<AnimateHeight duration={300} height={this.state.height}>
					<div className="description">
						<label>Course Description</label>
						<p>{this.props.description}</p>
					</div>
				</AnimateHeight>
			</div>
		);
	}
}

export default connect(null, actions)(LibraryCourse);
