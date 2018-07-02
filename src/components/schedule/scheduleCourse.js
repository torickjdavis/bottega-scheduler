import React, { Component } from 'react';

import Icon from '../icon';
import Arrow from '../arrow';
import Action from '../action';

class LibraryCourse extends Component {
	render() {
		return (
			<div className="course">
				<label className="title">{this.props.title}</label>
			</div>
		);
	}
}

export default LibraryCourse;
