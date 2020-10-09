import React from 'react';
import styles from './Footer.module.scss';
import SocialRibbon from '../SocialRibbon';

function Footer() {
	return (
		<footer>
			<SocialRibbon className={styles.socialRibbon} />
			&copy; 2020 &bull; Waxcide
		</footer>
	);
}

export default Footer;
