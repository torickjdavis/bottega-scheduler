import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

import Icon from '../icon';
import Arrow from '../arrow';
import Action from '../action';

class LibraryCourse extends Component {
	constructor(props) {
		super(props);

		this.state = {
			status: true
		};
	}

	renderDescription = function() {
		// Refactor so false state is when it is closed, currently this is due to the Arrow.props.callback() being called before render() and state not being changed yet. (Delayed state change)
		if (!this.state.status) {
			return (
				<div className="description">
					<label>Course Description</label>
					<p>{this.props.description}</p>
				</div>
			);
		}
	}.bind(this);

	handleCallback = function(status) {
		this.setState({ status });
	}.bind(this);

	render() {
		return (
			<div className="course">
				<header>
					<label className="title">{this.props.title}</label>
					{ Icon('fas fa-check', 'check')}
				</header>
				<div className="line"></div>
				<Arrow callback={status => this.handleCallback(status)} id={this.props.id}/>
				<Action onClick={() => this.props.toggleEnrolled(this.props.id)}/>
				{ this.renderDescription() }
			</div>
		);
	}
}

export default connect(null, actions)(LibraryCourse);
