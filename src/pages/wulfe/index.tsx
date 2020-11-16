import React from 'react';
import { graphql as gql, useStaticQuery } from 'gatsby';
import Head from '../../components/Head';
import Layout from '../../components/Layout';
import Content from '../../components/Content';

interface QueryResult {
	markdownRemark: {
		html: string;
	};
}

const CONTENT_QUERY = gql`
	query WulfeIntro {
		markdownRemark(frontmatter: {
			title: { eq: "Wulfe Main" }
		}) {
			html
		}
	}
`;

const WulfePage: React.FC = () => {
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

export default WulfePage;
