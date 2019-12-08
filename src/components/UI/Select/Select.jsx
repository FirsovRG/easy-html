import React, { useState } from 'react';
import styles from './Select.module.css';
import arrow from '../../../resources/images/arrow.svg';
import classNames from 'classnames';

export const Select = ({
	options,
	autoFocus,
	disabled,
	multiple,
	name,
	size,
	selectClassName,
	optionClassName,
	isOpened,
	onSelectItem,
	value,
	label,
	labelClassName,
	shouldCloseOnBlur = true,
	closeOnSelect = true
}) => {
	const [isSelectOpened, setIsSelectOpened] = useState(isOpened);

	return (
		<div className={styles.selectBlock} >
			<label className={classNames(styles.defaultLabelStyle, labelClassName)}>{label}</label>
			<div className={styles.select} tabIndex='0' onBlur={() => setIsSelectOpened(false)} onClickCapture={() => setIsSelectOpened(!isSelectOpened)}>
				<div
					className={classNames(styles.defaultSelectStyle, selectClassName)}
					
				>
					{`${value.width}x${value.height}`}
					<div className={styles.selectControls}>
						<div className={styles.divider} />
						<img
							className={classNames(
								styles.dropDownArrow,
								isSelectOpened ? styles.arrowUp : styles.arrowDown
							)}
							src={arrow}
							alt=''
						/>
					</div>
				</div>
				{isSelectOpened && (
					<div className={styles.dropDownMenu}>
						{options.map(option => (
							<div
								key={option.value}
								className={classNames(styles.defaultOptionStyle, optionClassName)}
								onClick={() => {
									onSelectItem(option.value);
									if (closeOnSelect) {
										setIsSelectOpened(false);
									}
								}}
							>
								{option.title}
							</div>
						))}
					</div>
				)}
			</div>
		</div>
	);
};
