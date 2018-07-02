import React, { Component } from 'react';

class LibraryCourse extends Component {
	render() {
		return (
			<div className="course">
				<label className="title">Problem Solving</label>
				{/* icon component*/}
				{/* arrow component*/}
				{/* action button component*/}
				<div className="description">
					<label>Course Description</label>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque quis accumsan enim. Suspendisse potenti. Pellentesque ultricies sit amet diam id vulputate. Sed sit amet imperdiet mauris. Nunc convallis, erat a imperdiet porttitor, velit ex fringilla neque, eget interdum tortor arcu sit amet lacus. Phasellus eleifend odio nec mauris dictum, et eleifend ex lobortis.</p>
				</div>
			</div>
		);
	}
}

export default LibraryCourse;
