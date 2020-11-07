import React, { ReactNode } from 'react';
import { Link } from 'gatsby';

interface Props {
	children: ReactNode;
	href: string;
}

const HeaderNavItem: React.FC<Props> = ({ children, href }) => (
	<li>
		<Link className="nav-link w-nav-link" to={href}>
			{children}
		</Link>
	</li>
);

export default HeaderNavItem;
