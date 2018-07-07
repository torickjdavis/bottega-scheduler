import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

import Action from '../action';

class ScheduleCourse extends Component {
	render() {
		return (
			<div className="course">
				<span className="title">{this.props.title}</span>
				<Action onClick={() => this.props.toggleEnrolled(this.props.id)} className="remove"/>
			</div>
		);
	}
}

export default connect(null, actions)(ScheduleCourse);
