import React from 'react';
import { graphql as gql, useStaticQuery } from 'gatsby';
import Head from '../components/Head';
import Layout from '../components/Layout';
import Contact, { ContactHoursDay } from '../components/Contact';

interface QueryResult {
	allContactHoursJson: {
		nodes: ContactHoursDay[];
	};
}

const ContactPage: React.FC = () => {
	const days: ContactHoursDay[] = useStaticQuery<QueryResult>(gql`
		query ContactUsPage {
			allContactHoursJson(limit: 7) {
				nodes {
					id
					day
					from
					to
				}
			}
		}
	`).allContactHoursJson.nodes;

	return (
		<>
			<Head>
				<body className="subpage-background" />
			</Head>
			<Layout>
				<Contact availability={days} />
			</Layout>
		</>
	);
};

export default ContactPage;
