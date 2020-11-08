import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import styles from './HeroIntro.module.scss';
import dnskLogo from './dnsk.svg';
import buffaloFishSrc from './buffalo-fish.png';
import SocialRibbon from '../SocialRibbon';

const HeroIntro: React.FC = () => (
	<section className="hero">
		<div className={styles.heroContainer}>
			<h1 className="hero-heading">Waxcide</h1>
			<div className={styles.headingButtons}>
				<Link className="big button w-button" to="/waxcide">waxcide</Link>
				<Link className="big button w-button" to="/dnsk">
					<Img fixed={dnskLogo} alt="DNSK Logo" />
				</Link>
				<Link className="big button w-button" to="/wulfe">Wulfe</Link>
				<Link className="big button w-button" to="/buffalo-fish">
					<Img fixed={buffaloFishSrc} alt="Buffalo Fish Logo" />
				</Link>
			</div>
			<SocialRibbon className={styles.socialRibbon} />
		</div>
	</section>
);

export default HeroIntro;
