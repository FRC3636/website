import React from "react";
import { graphql } from "gatsby";
import Helmet from "react-helmet";
import Layout from "../layouts/Simple.tsx";

interface Props {}

const Post: React.FC<Props> = ({ data }) => {
	const { frontmatter, html, timeToRead } = data.markdownRemark;

	return (
		<Layout>
			<Helmet>
				<title>{frontmatter.title} | Grant Robotics</title>
			</Helmet>

			<div className="max-w-prose text-xl py-32 mx-4 sm:mx-auto">
				<div className="mb-12 text-black dark:text-white">
					<h1 className="mb-2 font-serif text-6xl">{frontmatter.title}</h1>
					<span className="text-xl italic">
						{frontmatter.date} &mdash; {timeToRead} Minute Read
					</span>
				</div>

				<div className="prose prose-xl dark:prose-dark">
					<hr />
					<div dangerouslySetInnerHTML={{ __html: html }} />
				</div>
			</div>
		</Layout>
	);
};

export const query = graphql`
	query ($id: String!) {
		markdownRemark(id: { eq: $id }) {
			frontmatter {
				title
				date
			}
			html
			timeToRead
		}
	}
`;

export default Post;
