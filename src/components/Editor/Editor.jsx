import React from 'react';
import styles from './Editor.module.css';
import { Select } from '../UI/Select';
import { screenResolutions } from '../../constants/editor';
import { connect } from 'react-redux';
import { changeScreenResolution } from '../../store/actions/editor';
import { Canvas } from './Canvas/Canvas';

const mapOptions = screenResolutions.reduce((newOptions, option) => {
	const stringOption = `${option.width}x${option.height}`;
	return [...newOptions, { value: option, title: stringOption }];
}, []);

class Editor extends React.Component {
	render() {
		return (
			<div className={styles.editor}>
				<Select
					label='Screen resolution'
					options={mapOptions}
					onSelectItem={value => this.props.changeScreenResolution(value)}
					value={this.props.screenResolution}
				/>
				<div className={styles.canvasBlock}>
					<Canvas screenResolution={this.props.screenResolution} />
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	screenResolution: state.editor.screenResolution
});

export const ConnectedEditor = connect(mapStateToProps, { changeScreenResolution })(Editor);
