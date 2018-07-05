import React, { Component } from 'react';
import { connect } from 'react-redux';

import Icon from '../icon';
import Arrow from '../arrow';
import Action from '../action';

class ScheduleCourse extends Component {
	render() {
		return (
			<div className="course">
				<label className="title">{this.props.title}</label>
			</div>
		);
	}
}

export default ScheduleCourse;
