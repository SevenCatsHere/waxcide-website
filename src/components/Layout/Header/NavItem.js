import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

function HeaderNavItem({ children, href }) {
	return (
		<li>
			<Link className="nav-link w-nav-link" to={href}>
				{children}
			</Link>
		</li>
	);
}

HeaderNavItem.propTypes = {
	children: PropTypes.node.isRequired,
	href: PropTypes.string.isRequired,
};

export default HeaderNavItem;
