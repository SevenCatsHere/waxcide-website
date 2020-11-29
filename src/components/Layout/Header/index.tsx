import React, { useState } from 'react';
import styled from 'styled-components';
import NavItem from './NavItem';

const Container = styled.header`
	position: fixed;
	top: 0;
	right: 0;
	left: 0;
	border-bottom: 1px solid rgba(255, 255, 255, .2);
	background-color: rgba(0, 0, 0, .8);
`;

const Nav = styled.nav`
	&,
	ul {
		display: flex;
		align-items: center;
		justify-content: space-around;
		list-style: none;
		padding-left: 0;
		margin-bottom: 0;
	}

	a {
		max-width: 940px;
		font-size: .9rem;
	}
`;

const NavLinksWrapper = styled.div`
	@media (max-width: 767px) {
		position: fixed;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		width: 100vw;
		transition: transform .2s ease-in-out;
		transform: translateX(100%);
		background-color: rgba(0, 0, 0, .8);
		.open & {
			transform: none;
		}

		&.nav-links-wrapper ul {
			flex-direction: column;
			align-items: stretch;
			margin-top: 3rem;
		}

		li {
			padding-top: 1.25rem;
			padding-bottom: 1.25rem;
			text-align: center;
			font-size: 1.6rem;
			border-width: 1px 0 0 0;
			border-style: solid;
			border-color: rgba(255, 255, 255, .7);
			&:last-child {
				border-bottom-width: 1px;
			}
		}
	}
`;

const LevelNavHeading = styled.span`
	@media (min-width: 768px) {
		display: none;
	}
`;

const ToggleButton = styled.button`
	position: fixed;
	top: 1rem;
	right: 1rem;
	border: 0;
	background: transparent;

	@media (min-width: 768px) {
		display: none;
	}
`;

const Header: React.FC = () => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<Container className="nav-bar w-nav">
			<div className="w-container">
				<Nav className="nav-menu w-nav-menu">
					<NavLinksWrapper>
						<ul>
							<NavItem href="/">Home</NavItem>
							<li>
								<LevelNavHeading>Artists</LevelNavHeading>
								<ul>
									<NavItem href="/waxcide">waxcide</NavItem>
									<NavItem href="/dnsk">DNSK</NavItem>
									<NavItem href="/wulfe">Wulfe</NavItem>
									<NavItem href="/buffalo-fish">buffaLOFIsh</NavItem>
								</ul>
							</li>
							<NavItem href="/contact">Contact</NavItem>
						</ul>
					</NavLinksWrapper>

					<ToggleButton
						type="button"
						aria-label="Toggle navigation"
						onClick={() => setIsOpen(prev => !prev)}
					>
						{isOpen ? 'Close' : 'Open'}
					</ToggleButton>
				</Nav>
			</div>
		</Container>
	);
};

export default Header;
