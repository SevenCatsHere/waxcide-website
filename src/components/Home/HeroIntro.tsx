import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import WaxcideHeading from './WaxcideHeading.svg';
import WaxcideLogo from '../logos/Waxcide.svg';
import DnskLogo from '../logos/Dnsk.svg';
import WulfeLogo from '../logos/Wulfe.svg';
import BuffaloFishLogo from '../logos/BuffaloFish.svg';
import SocialRibbon from '../SocialRibbon';

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 100vh;
`;

const HeroImage = styled(WaxcideHeading)`
	width: 800px;

	path {
		fill: #6ebcec;
	}
`;

const HeadingButtons = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	align-items: center;
	width: 25rem;
	margin-top: 2rem;
	margin-bottom: 8rem;

	a {
		display: block;
		width: 50%;
	}

	svg {
		width: 100%;
		transition: transform .15s ease-in-out;
		&:hover {
			transform: scale(1.2)
		}
	}
`;

const HeroSocialRibbon = styled(SocialRibbon)`
	width: 100vw;
	padding-top: 3rem;
	padding-bottom: 3rem;
	background-color: rgba(5, 5, 5, .6);

	svg {
		opacity: .7;
		transition: opacity .15s linear;
		color: #020202;
		font-size: 3rem;
		&:hover {
			opacity: .95;
		}
	}
`;

const HeroIntro: React.FC = () => (
	<section className="hero">
		<Container>
			<HeroImage />
			<HeadingButtons>
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
			</HeadingButtons>
			<HeroSocialRibbon />
		</Container>
	</section>
);

export default HeroIntro;
