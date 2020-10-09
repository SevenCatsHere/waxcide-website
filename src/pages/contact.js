import React from 'react';
import Head from '../components/Head';
import Layout from '../components/Layout';
import Contact from '../components/Contact';

function ContactPage() {
	return (
		<>
			<Head>
				<body className="subpage-background" />
			</Head>
			<Layout>
				<Contact />
			</Layout>
		</>
	);
}

export default ContactPage;
