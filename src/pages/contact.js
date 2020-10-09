import React from 'react';
import { graphql } from 'gatsby';
import Head from '../components/Head';
import Layout from '../components/Layout';
import Contact from '../components/Contact';

export const query = graphql`
	query {
		allContactHoursJson(filter: { sourceInstanceName: { eq: "data" } }) {
			edges {
				node {
					to
					from
				}
			}
		}
	}
`;

function ContactPage(props) {
	console.log(props);
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
