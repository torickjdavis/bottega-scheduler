import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

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
				<Action onClick={() => this.props.toggleEnrolled(this.props.id)}/>
				<div className="description">
					<label>Course Description</label>
					<p>{this.props.description}</p>
				</div>
			</div>
		);
	}
}

export default connect(null, actions)(LibraryCourse);
