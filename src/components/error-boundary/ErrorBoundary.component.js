import React, { Component } from "react";

class ErrorBoundary extends Component {
	constructor() {
		super();
		this.state = { hasErrored: false };
	}

	static getDerivedStateFromError(err) {
		return { hasErrored: true };
	}

	componentDidCatch(err) {
		console.log(err);
	}
	render() {
		return this.state.hasErrored ? (
			<h1>OOOOOOPPPSSSSS</h1>
		) : (
			this.props.children
		);
	}
}

export default ErrorBoundary;
