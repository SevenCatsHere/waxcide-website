import React, { StrictMode } from 'react';
import Head from '../components/Head';
import Layout from '../components/Layout';

const NotFoundPage: React.FC = () => (
	<StrictMode>
		<Head />
		<Layout>
			<h1>Not Found</h1>
		</Layout>
	</StrictMode>
);

export default NotFoundPage;
