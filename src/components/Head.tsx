import React, { ReactNode } from 'react';
import Helmet from 'react-helmet';

interface Props {
	children?: ReactNode;
}

const Head: React.FC<Props> = ({ children }) => (
	<Helmet>
		<meta charSet="utf-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
		<title>Waxcide</title>
		<link
			rel="stylesheet"
			href="https://fonts.googleapis.com/css?family=Roboto:300,regular,500%7CRoboto+Slab:regular"
		/>
		{children}
	</Helmet>
);

export default Head;
