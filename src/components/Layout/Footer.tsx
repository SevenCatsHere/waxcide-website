import React from 'react';
import styled from 'styled-components';
import SocialRibbon from '../SocialRibbon';

const Container = styled.footer`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;

	i {
		color: #fff;
	}
`;

const SocialNav = styled(SocialRibbon)`
	padding-top: 0;
	padding-bottom: 0;
	background-color: transparent;

	ul {
		width: 15rem;
		margin-right: auto;
		margin-left: auto;
		justify-content: space-between;
	}

	svg {
		font-size: 2.5rem;
		color: #fff;
		opacity: .8;
		transition: opacity .125s linear;
		&:hover {
			opacity: .9;
		}
	}
`;

const Copyright = styled.p`
	margin-top: .5em;
	font-size: 1rem;
`;

const Footer: React.FC = () => (
	<Container>
		<SocialNav />
		<Copyright>&copy; 2020 &bull; Waxcide</Copyright>
	</Container>
);

export default Footer;
