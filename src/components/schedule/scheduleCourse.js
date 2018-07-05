import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

import Action from '../action';

class ScheduleCourse extends Component {
	render() {
		return (
			<div className="course">
				<label className="title">{this.props.title}</label>
				<Action onClick={() => this.props.toggleEnrolled(this.props.id)}/>
			</div>
		);
	}
}

export default connect(null, actions)(ScheduleCourse);
