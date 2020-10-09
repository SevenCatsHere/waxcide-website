import React from 'react';
import Head from '../components/Head';
import Layout from '../components/Layout';
import HeroIntro from '../components/Home/HeroIntro';

function HomePage() {
	return (
		<>
			<Head />
			<Layout>
				<HeroIntro />
			</Layout>
		</>
	);
}

export default HomePage;
