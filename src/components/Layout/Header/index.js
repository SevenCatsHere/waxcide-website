import React from 'react';
import cn from 'classnames';
import styles from './index.module.scss';
import NavItem from './NavItem';

function Header() {
	return (
		<header className={cn(styles.header, 'nav-bar', 'w-nav')}>
			<div className="w-container">
				<nav className={cn('nav-menu', 'w-nav-menu', styles.nav)}>
					<ul>
						<NavItem href="/band">Band</NavItem>
						<NavItem href="/music">Music</NavItem>
						<NavItem href="/tour">Tour</NavItem>
						<NavItem href="/gallery">Gallery</NavItem>
						<NavItem href="/contact">Contact</NavItem>
					</ul>
				</nav>
			</div>
		</header>
	);
}

export default Header;
