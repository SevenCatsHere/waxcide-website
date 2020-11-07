import React from 'react';
import cn from 'classnames';
import {
	FaFacebook,
	FaTwitter,
	FaInstagram,
	FaYoutube,
} from 'react-icons/fa';
import styles from './SocialRibbon.module.scss';

interface Props {
	className: string;
}

const SocialRibbon: React.FC<Props> = ({ className }) => (
	<nav className={cn(styles.socialRibbon, className)}>
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
	</nav>
);

export default SocialRibbon;
