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

const DnskPage: React.FC = () => {
	const { html } = useStaticQuery<QueryResult>(gql`
		query DnskPage {
			markdownRemark(frontmatter: {
				title: { eq: "DNSK Main Content" }
			}) {
				html
			}
		}
	`).markdownRemark;

	return (
		<>
			<Head>
				<body className="subpage-background" />
			</Head>
			<Layout>
				<Content html={html} variant="pageContent" />
			</Layout>
		</>
	);
};

export default DnskPage;
