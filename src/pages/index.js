import React from 'react';
import '../styles/index.scss';
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
