import React, { Component } from 'react';

import Icon from '../icon';
import Arrow from '../arrow';
import Action from '../action';

class LibraryCourse extends Component {
	render() {
		return (
			<div className="course">
				<header>
					<label className="title">{this.props.title}</label>
					{ Icon('fas fa-check')}
				</header>
				<Arrow />
				<Action />
				<div className="description">
					<label>Course Description</label>
					<p>{this.props.description}</p>
				</div>
			</div>
		);
	}
}

export default LibraryCourse;
