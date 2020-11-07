import React from 'react';
import { Link } from 'gatsby';
import styles from './HeroIntro.module.scss';
import SocialRibbon from '../SocialRibbon';

const HeroIntro: React.FC = () =>(
	<section className="hero">
		<div className={styles.heroContainer}>
			<h1 className="hero-heading">Waxcide</h1>
			<div className={styles.headingButtons}>
				<Link className="big button w-button" to="/waxcide">waxcide</Link>
				<Link className="big button w-button" to="/dnsk">DNSK</Link>
				<Link className="big button w-button" to="/wulfe">Wulfe</Link>
				<Link className="big button w-button" to="/buffalo-fish">BuffaLOFIsh</Link>
			</div>
			<SocialRibbon className={styles.socialRibbon} />
		</div>
	</section>
);

export default HeroIntro;
