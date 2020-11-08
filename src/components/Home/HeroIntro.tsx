import React from 'react';
import { Link, useStaticQuery, graphql as gql } from 'gatsby';
import Img, { FluidObject } from 'gatsby-image';
import styles from './HeroIntro.module.scss';
import DnskLogo from './DnskLogo.svg';
import SocialRibbon from '../SocialRibbon';

interface QueryResult {
	buffaloFishLogo: {
		childImageSharp: {
			fluid: FluidObject;
		};
	};
}

const HeroIntro: React.FC = () => {
	const queryResults: QueryResult = useStaticQuery<QueryResult>(gql`
		query HeroIntro {
			buffaloFishLogo: file(relativePath: {eq: "buffalo-fish-logo.png"}) {
				childImageSharp {
					fluid(maxWidth: 700, quality: 100) {
						...GatsbyImageSharpFluid
					}
				}
  		}
		}
	`);

	const buffaloFishLogo = queryResults.buffaloFishLogo.childImageSharp.fluid;

	return (
		<section className="hero">
			<div className={styles.heroContainer}>
				<h1 className="hero-heading">Waxcide</h1>
				<div className={styles.headingButtons}>
					<Link className="big button w-button" to="/waxcide">waxcide</Link>
					<Link className="big button w-button" to="/dnsk">
						<DnskLogo />
					</Link>
					<Link className="big button w-button" to="/wulfe">Wulfe</Link>
					<Link className="big button w-button" to="/buffalo-fish">
						<Img fluid={buffaloFishLogo} alt="Buffalo Fish Logo" />
					</Link>
				</div>
				<SocialRibbon className={styles.socialRibbon} />
			</div>
		</section>
	);
};

export default HeroIntro;
