import React from 'react';
import cn from 'classnames';
import '../../../styles/index.scss';
import styles from './index.module.scss';
import NavItem from './NavItem';

const Header: React.FC = () => (
	<header className={cn(styles.header, 'nav-bar', 'w-nav')}>
		<div className="w-container">
			<nav className={cn('nav-menu', 'w-nav-menu', styles.nav)}>
				<ul>
					<NavItem href="/">Home</NavItem>
					<NavItem href="/contact">Contact</NavItem>
				</ul>
			</nav>
		</div>
	</header>
);

export default Header;
