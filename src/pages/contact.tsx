import React, { StrictMode } from 'react';
import { graphql as gql, useStaticQuery } from 'gatsby';
import Head from '../components/Head';
import Layout from '../components/Layout';
import Contact, { ContactHoursDay } from '../components/Contact';

interface QueryResult {
	allContactHoursJson: {
		nodes: ContactHoursDay[];
	};
	markdownRemark: {
		html: string;
	};
}

const ContactPage: React.FC = () => {
	const queryResult = useStaticQuery<QueryResult>(gql`
		query ContactUsPage {
			allContactHoursJson(limit: 7) {
				nodes {
					id
					day
					from
					to
				}
			}
			markdownRemark(frontmatter: {
				title: { eq: "Contact Information" }
			}) {
				html
			}
		}
	`);

	const days = queryResult.allContactHoursJson.nodes;
	const contactInfoHtml = queryResult.markdownRemark.html;

	return (
		<StrictMode>
			<Head>
				<body className="subpage-background" />
			</Head>
			<Layout>
				<Contact availability={days} contactInfoHtml={contactInfoHtml} />
			</Layout>
		</StrictMode>
	);
};

export default ContactPage;
