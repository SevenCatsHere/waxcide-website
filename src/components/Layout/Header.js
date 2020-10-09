import React from 'react';
import cn from 'classnames';
import { Link } from 'gatsby';
import styles from './Header.module.scss';

const NAV_ITEMS = [
	{
		text: 'Band',
		href: '/band',
	},
	{
		text: 'Music',
		href: '/music',
	},
	{
		text: 'Tour',
		href: '/tour',
	},
	{
		text: 'Gallery',
		href: '/gallery',
	},
	{
		text: 'Contact',
		href: '/contact',
	},
];

function Header() {
	return (
		<header className={cn(styles.header, 'nav-bar', 'w-nav')}>
			<div className="w-container">
				<Link className="brand-link w-nav-brand w--current" href="/">
					<h1 className="logo">Waxcide</h1>
				</Link>

				<nav className={cn('nav-menu', 'w-nav-menu', styles.nav)}>
					<ul>
						{NAV_ITEMS.map(({ text, href }) => (
							<li>
								<Link className="nav-link w-nav-link" href={href}>
									{text}
								</Link>
							</li>
						))}
					</ul>
				</nav>
			</div>
		</header>
	);
}

export default Header;
