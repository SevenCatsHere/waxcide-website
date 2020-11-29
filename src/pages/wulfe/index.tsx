import React, { StrictMode } from 'react';
import { graphql as gql, useStaticQuery } from 'gatsby';
import Head from '../../components/Head';
import Layout from '../../components/Layout';
import Content from '../../components/Content';

interface QueryResult {
	markdownRemark: {
		html: string;
	};
}

const WulfePage: React.FC = () => {
	const { html } = useStaticQuery<QueryResult>(gql`
		query WulfeIntro {
			markdownRemark(frontmatter: {
				title: { eq: "Wulfe Main Content" }
			}) {
				html
			}
		}
	`).markdownRemark;

	return (
		<StrictMode>
			<Head>
				<body className="subpage-background" />
			</Head>
			<Layout>
				<Content html={html} variant="pageContent" />
			</Layout>
		</StrictMode>
	);
};

export default WulfePage;
