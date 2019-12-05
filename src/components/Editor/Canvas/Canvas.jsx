import React from 'react';
import styles from './Canvas.module.css';

export class Canvas extends React.Component {
	canvasRef = React.createRef();
	state = {
		canDraw: false,
		coordinates: {
			x1: 0,
			y1: 0,
			x2: 0,
			y2: 0
		}
	};

	canvasContext = this.refs.canvas.getC

	handleMouseDown = e => {
		this.setState({ canDraw: true });
		const { clientX, clientY } = e;
		this.setState({ coordinates: { x1: clientX, y1: clientY, x2: clientX, y2: clientY } });
	};

	handleMouseUp = () => {
		this.setState({ canDraw: false });
	};

	handleMouseMove = e => {
		const { clientX, clientY } = e;
		if (this.state.canDraw) {
			this.setState({ coordinates: { x2: clientX, y2: clientY } });
		}
	};

	drawSelection = () => {
        const canvasContext = this.refs.canvas;
		if (this.state.canDraw) {
			const { x1, x2, y1, y2 } = this.state.coordinates;
			canvasContext.beginPath();
			canvasContext.lineWidth = '2';
			canvasContext.strokeStyle = 'white';
			canvasContext.rect(x1, y1, x2 - x1, y2 - y1);
			canvasContext.stroke();
		}
	};

	render() {
		return (
			<div
				ref={this.canvasRef}
				className={styles.canvas}
				style={{
					width: `${this.props.screenResolution.width / 1.5}px`,
					height: `${this.props.screenResolution.height / 1.5}px`
				}}
				onMouseDown={this.handleMouseMove}
				onMouseUp={this.handleMouseUp}
				onMouseMove={this.handleMouseMove}
			>
				<canvas></canvas>
			</div>
		);
	}
}
