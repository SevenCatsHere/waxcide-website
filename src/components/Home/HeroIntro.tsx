import React from 'react';
import { Link } from 'gatsby';
import styles from './HeroIntro.module.scss';
import WaxcideHeading from './WaxcideHeading.svg';
import WaxcideLogo from '../logos/Waxcide.svg';
import DnskLogo from '../logos/Dnsk.svg';
import WulfeLogo from '../logos/Wulfe.svg';
import BuffaloFishLogo from '../logos/BuffaloFish.svg';
import SocialRibbon from '../SocialRibbon';

const HeroIntro: React.FC = () => (
	<section className="hero">
		<div className={styles.heroContainer}>
			<WaxcideHeading className={styles.heading} />
			<div className={styles.headingButtons}>
				<Link to="/waxcide" title="Waxcide">
					<WaxcideLogo />
				</Link>
				<Link to="/dnsk" title="DNSK">
					<DnskLogo />
				</Link>
				<Link to="/wulfe" title="Wulfe">
					<WulfeLogo />
				</Link>
				<Link to="/buffalo-fish" title="buffaLOFIsh">
					<BuffaloFishLogo />
				</Link>
			</div>
			<SocialRibbon className={styles.socialRibbon} />
		</div>
	</section>
);

export default HeroIntro;
