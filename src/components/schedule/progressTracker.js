import React, { Component } from 'react';

class ProgressTracker extends Component {
	calculateProgress = function() {
		return (this.props.amountEnrolled / this.props.amountPossible) * 100;
	}.bind(this);

	render() {
		return (
			<div className="progressTracker">
				<span>Progress Tracker</span>
				<div className="percentage">{this.calculateProgress()}%</div>
			</div>
		);
	}
}

export default ProgressTracker;
