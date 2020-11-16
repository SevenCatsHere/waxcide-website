import React from 'react';
import { useStaticQuery, graphql as gql } from 'gatsby';
import Head from '../components/Head';
import Layout from '../components/Layout';
import Content from '../components/Content';

interface QueryResult {
	markdownRemark: {
		html: string;
	};
}

const CONTENT_QUERY = gql`
query WaxcidePage {
	markdownRemark(frontmatter: {
		title: { eq: "Waxcide Main Content" }
	}) {
		html
	}
}
`;

const WaxcidePage: React.FC = () => {
	const { html } = useStaticQuery<QueryResult>(CONTENT_QUERY).markdownRemark;

	return (
		<>
			<Head />
			<Layout>
				<Content html={html} variant="pageContent" />
			</Layout>
		</>
	);
};

export default WaxcidePage;
