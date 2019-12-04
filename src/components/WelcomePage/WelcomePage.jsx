import React from 'react';
import styles from './WelcomePage.module.css';
import gif from '../../resources/gifs/8.gif';
import githubImg from '../../resources/images/github.png';
import { NavLink } from 'react-router-dom';

export function WelcomePage(props) {
	return (
		<div className={styles.welcomePage}>
			
			<div className={styles.content}>
				<img className={styles.designGif} src={gif} alt='design' />

				<div className={styles.title}>
					<span className={styles.title_maxSize}>Create layouts</span>
					<span className={styles.title_averageSize}>and convert them</span>
					<span className={styles.title_minSize}>to HTML</span>
					<div className={styles.buttonsBlock}>
						<NavLink to='/editor'>Get started</NavLink>
						<NavLink to='/editor'>Start with Wizard</NavLink>
					</div>
				</div>
			</div>
			<div className={styles.copyright}>
				&copy;2019 Roman Firsov
				<a href='https://github.com/FirsovRG/easy-html' target='blank'>
					<img className={styles.githubImg} src={githubImg} alt='github' />
				</a>
			</div>
		</div>
	);
}
