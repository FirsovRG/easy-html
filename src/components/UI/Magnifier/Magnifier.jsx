import React, { useState } from 'react';
import styles from './Magnifier.module.css';
import magnifierIcon from '../../../resources/images/magnifier.png';
import classNames from 'classnames';

export const Magnifier = ({ zoomValue = 1, changeZoomValue }) => {
	const defaultZoomValue = e => {
		if (!e.target.value) {
			changeZoomValue(1);
		}
	};

	const [isScaleButtonsOpened, setIsScaleControlsOpened] = useState(false);

	return (
		<div className={styles.magnifierBlock} onMouseLeave={() => setIsScaleControlsOpened(false)}>
			<div className={styles.magnifier}>
				<input
					className={styles.magnifierValue}
					value={zoomValue}
					onChange={e => changeZoomValue(+e.target.value)}
					onBlur={defaultZoomValue}
				/>
				<div
					className={styles.magnifierControls}
					onMouseEnter={() => setIsScaleControlsOpened(true)}
				>
					<div className={styles.divider} />
					<img className={styles.magnifierIcon} src={magnifierIcon} alt='zoom' />
				</div>
			</div>
			<div
				className={classNames(
					styles.scaleControls,
					isScaleButtonsOpened ? styles.opened : styles.closed
				)}
			>
				<span className={styles.scaleButton} onClick={() => changeZoomValue(zoomValue + 0.25)}>+</span>
				<span className={styles.scaleButton} onClick={() => changeZoomValue(zoomValue - 0.25)}>-</span>
			</div>
		</div>
	);
};
