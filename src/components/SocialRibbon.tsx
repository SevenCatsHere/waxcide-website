import React from 'react';
import styled from 'styled-components';
import {
	FaFacebook,
	FaTwitter,
	FaInstagram,
	FaYoutube,
} from 'react-icons/fa';

const Nav = styled.nav`
	width: 100vw;
	padding-top: 3rem;
	padding-bottom: 3rem;
	background-color: rgba(5, 5, 5, .6);

	ul {
		display: flex;
		justify-content: space-around;
		list-style: none;
		margin-bottom: 0;
		padding-left: 0;
	}
`;

const SocialRibbon: React.FC = () => (
	<Nav>
		<ul>
			<li>
				<a
					href="https://www.facebook.com/114307576922649"
					rel="noreferrer"
					target="_blank"
					title="Facebook"
				>
					<FaFacebook />
				</a>
			</li>
			<li>
				<a
					href="https://twitter.com/dnskse"
					rel="noreferrer"
					target="_blank"
					title="Twitter"
				>
					<FaTwitter />
				</a>
			</li>
			<li>
				<a
					href="https://www.instagram.com/waxcide"
					rel="noreferrer"
					target="_blank"
					title="Instagram"
				>
					<FaInstagram />
				</a>
			</li>
			<li>
				<a
					href="https://www.youtube.com/channel/UCjpm-6b0nsroI5YVm6_jg_w"
					rel="noreferrer"
					target="_blank"
					title="Youtube"
				>
					<FaYoutube />
				</a>
			</li>
		</ul>
	</Nav>
);

export default SocialRibbon;
