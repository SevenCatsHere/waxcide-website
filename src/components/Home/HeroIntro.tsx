import React from 'react';
import { Link } from 'gatsby';
import styles from './HeroIntro.module.scss';
import WaxcideHeading from './WaxcideHeading.svg';
import DnskLogo from '../logos/DnskLogo.svg';
import BuffaloFishLogo from '../logos/BuffaloFishLogo.svg';
import SocialRibbon from '../SocialRibbon';

const HeroIntro: React.FC = () => (
	<section className="hero">
		<div className={styles.heroContainer}>
			<WaxcideHeading className={styles.heading} />
			<div className={styles.headingButtons}>
				<Link to="/waxcide">waxcide</Link>
				<Link to="/dnsk">
					<DnskLogo />
				</Link>
				<Link to="/wulfe">Wulfe</Link>
				<Link to="/buffalo-fish">
					<BuffaloFishLogo />
				</Link>
			</div>
			<SocialRibbon className={styles.socialRibbon} />
		</div>
	</section>
);

export default HeroIntro;
