import React, { Component } from 'react';

class ProgressTracker extends Component {
	render() {
		return (
			<div className="progressTracker">
				<label>Progress Tracker</label>
				<div className="percentage">0%</div>
			</div>
		);
	}
}

export default ProgressTracker;
