import React from 'react';
import { Link } from 'gatsby';
import styles from './index.module.scss';
import SocialRibbon from './SocialRibbon';

function HeroIntro() {
	return (
		<section className="hero">
			<div className={styles.heroContainer}>
				<h1 className="hero-heading">Waxcide</h1>
				<div className={styles.headingButtons}>
					<Link className="big button w-button" to="/music">Check it out</Link>
					<Link className="big button w-button" to="/tour">Watch us live</Link>
				</div>
				<SocialRibbon />
			</div>
		</section>
	);
}

export default HeroIntro;