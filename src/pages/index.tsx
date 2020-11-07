import React from 'react';
import Head from '../components/Head';
import Layout from '../components/Layout';
import HeroIntro from '../components/Home/HeroIntro';

const HomePage: React.FC = () => (
	<>
		<Head />
		<Layout>
			<HeroIntro />
		</Layout>
	</>
);

export default HomePage;
