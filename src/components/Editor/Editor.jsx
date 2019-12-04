import React from 'react';
import styles from './Editor.module.css';
import { Select } from '../UI/Select';
import { screenResolutions } from '../../constants/editor';

const mapOptions = screenResolutions.reduce((newOptions, option) => {
	return [...newOptions, { value: option, title: option }];
}, []);

export class Editor extends React.Component {
	state = {
		screenResolution: screenResolutions[0]
	};
	render() {
		return (
			<div className={styles.editor}>
				<Select
					label='Screen resolution'
					options={mapOptions}
					onSelectItem={value => this.setState({ screenResolution: value })}
					value={this.state.screenResolution}
				/>
			</div>
		);
	}
}
