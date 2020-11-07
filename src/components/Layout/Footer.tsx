import React from 'react';
import styles from './Footer.module.scss';
import SocialRibbon from '../SocialRibbon';

const Footer: React.FC = () => (
	<footer className={styles.footer}>
		<SocialRibbon className={styles.socialRibbon} />
		<p className={styles.copyright}>
			&copy; 2020 &bull; Waxcide
		</p>
	</footer>
);

export default Footer;
