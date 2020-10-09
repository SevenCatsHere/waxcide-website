import React from 'react';
import Head from '../components/Head';
import Layout from '../components/Layout';
import HeroIntro from '../components/Home/HeroIntro';

export default function Home() {
	return (
		<>
			<Head />
			<Layout>
				<HeroIntro />
			</Layout>
		</>
	);
}
