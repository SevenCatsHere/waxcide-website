import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

function Head({ children }) {
	return (
		<Helmet>
			<meta charset="utf-8" />
			<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
			<title>Waxcide</title>
			<link
				rel="stylesheet"
				href="https://fonts.googleapis.com/css?family=Roboto:300,regular,500%7CRoboto+Slab:regular"
			/>
			{children}
		</Helmet>
	);
}

Head.propTypes = { children: PropTypes.node };
Head.defaultProps = { children: null };

export default Head;
