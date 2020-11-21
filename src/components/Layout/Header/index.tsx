import React, { useState } from 'react';
import cn from 'classnames';
import '../../../styles/index.scss';
import styles from './index.module.scss';
import NavItem from './NavItem';

const Header: React.FC = () => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<header
			className={cn(
				styles.header,
				isOpen ? styles.open : null,
				'nav-bar',
				'w-nav',
			)}
		>
			<div className="w-container">
				<nav className={cn('nav-menu', 'w-nav-menu', styles.nav)}>
					<div className={styles.navLinksWrapper}>
						<ul>
							<NavItem href="/">Home</NavItem>
							<li>
								<span className={styles.levelNavHeading}>Artists</span>
								<ul>
									<NavItem href="/waxcide">waxcide</NavItem>
									<NavItem href="/dnsk">DNSK</NavItem>
									<NavItem href="/wulfe">Wulfe</NavItem>
									<NavItem href="/buffalo-fish">buffaLOFIsh</NavItem>
								</ul>
							</li>
							<NavItem href="/contact">Contact</NavItem>
						</ul>
					</div>

					<button
						className={styles.toggleButton}
						type="button"
						aria-label="Toggle navigation"
						onClick={() => setIsOpen(prev => !prev)}
					>
						{isOpen ? 'Close' : 'Open'}
					</button>
				</nav>
			</div>
		</header>
	);
};

export default Header;
