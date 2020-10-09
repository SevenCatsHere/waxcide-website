import React from 'react';
import Helmet from 'react-helmet';

function Head() {
	return (
		<Helmet>
			<meta charset="utf-8" />
			<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
			<title>Waxcide</title>
			<link
				rel="stylesheet"
				href="https://fonts.googleapis.com/css?family=Roboto:300,regular,500%7CRoboto+Slab:regular"
			/>
		</Helmet>
	);
}

export default Head;
