import React, { Component } from 'react';

import ScheduleCourse from './scheduleCourse';
import Gradient from '../gradient';
import ProgressTracker from './progressTracker';

class Schedule extends Component {
	render() {
		return (
			<div className="schedule">
				<h1>My Schedule</h1>
				<ScheduleCourse title="Problem Solving"/>
				<ScheduleCourse title="Problem Sovling"/>
				<ScheduleCourse title="Problem Solving"/>
				<ProgressTracker />
				<Gradient />
			</div>
		);
	}
}

export default Schedule;
