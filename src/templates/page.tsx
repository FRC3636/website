import React from "react";
import { graphql } from "gatsby";
import Helmet from "react-helmet";
import Layout from "../layouts/Simple.tsx";

interface Props {}

const Page: React.FC<Props> = ({ data }) => {
	const { frontmatter, html } = data.markdownRemark;

	return (
		<Layout>
			<Helmet>
				<title>{frontmatter.title} | Grant Robotics</title>
			</Helmet>

			<div className="prose prose-xl dark:prose-dark max-w-prose py-32 mx-4 sm:mx-auto">
				<h1>{frontmatter.title}</h1>
				<hr />
				<div dangerouslySetInnerHTML={{ __html: html }} />
			</div>
		</Layout>
	);
};

export const query = graphql`
	query ($id: String!) {
		markdownRemark(id: { eq: $id }) {
			frontmatter {
				title
			}
			html
		}
	}
`;

export default Page;
