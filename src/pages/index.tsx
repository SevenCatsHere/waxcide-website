import React, { StrictMode } from 'react';
import Head from '../components/Head';
import Layout from '../components/Layout';
import HeroIntro from '../components/Home/HeroIntro';

const HomePage: React.FC = () => (
	<StrictMode>
		<Head />
		<Layout>
			<HeroIntro />
		</Layout>
	</StrictMode>
);

export default HomePage;
