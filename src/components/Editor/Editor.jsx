import React from 'react';
import styles from './Editor.module.css';
import { Select } from '../UI/Select';
import { screenResolutions } from '../../constants/editor';
import { connect } from 'react-redux';
import { changeScreenResolution, changeZoomValue } from '../../store/actions/editor';
import { Canvas } from './Canvas/Canvas';
import { Magnifier } from '../UI/Magnifier/Magnifier';

const mapOptions = screenResolutions.reduce((newOptions, option) => {
	const stringOption = `${option.width}x${option.height}`;
	return [...newOptions, { value: option, title: stringOption }];
}, []);

class Editor extends React.Component {
	render() {
		return (
			<div className={styles.editor}>
				<div className={styles.controlsBlock}>
					<Select
						label='Screen resolution'
						options={mapOptions}
						onSelectItem={value => this.props.changeScreenResolution(value)}
						value={this.props.screenResolution}
					/>
					<Magnifier
						zoomValue={this.props.zoomValue}
						changeZoomValue={this.props.changeZoomValue}
					/>
				</div>
				<div className={styles.canvasBlock}>
					<Canvas screenResolution={this.props.screenResolution} zoom={this.props.zoomValue} />
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	screenResolution: state.editor.screenResolution,
	zoomValue: state.editor.zoomValue
});

export const ConnectedEditor = connect(mapStateToProps, {
	changeScreenResolution,
	changeZoomValue
})(Editor);
