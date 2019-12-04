import React from 'react';
import styles from './Navigation.module.css';
import { NavLink } from 'react-router-dom';

export const Navigation = () => {
	return (
		<div className={styles.navigation}>
			<ul>
				<li>
					<NavLink activeClassName={styles.activeLink} exact to='/'>home</NavLink>
				</li>
				<li>
					<NavLink activeClassName={styles.activeLink} to='/editor'>editor</NavLink>
				</li>
				<li>
					<NavLink activeClassName={styles.activeLink} to='/route3'>Route 3</NavLink>
				</li>
				<li>
					<NavLink activeClassName={styles.activeLink} to='/route4'>Route 4</NavLink>
				</li>
			</ul>
		</div>
	);
};
