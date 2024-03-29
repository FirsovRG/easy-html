import React from 'react';
import { Navigation } from '../Navigation';
import styles from './Layout.module.css';

export const Layout = ({ children }) => {
	return (
		<div className={styles.layout}>
			<Navigation />
			{children}
		</div>
	);
};
