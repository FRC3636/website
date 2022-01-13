import React from "react";
import { graphql } from "gatsby";
import Helmet from "react-helmet";
import Layout from "../layouts/Simple";

interface Props {
	data: {
		markdownRemark: {
			frontmatter: {
				title: string;
				author: string;
				date: string;
			};
			html: string;
			timeToRead: number;
		};
	};
}

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
					<p className="text-xl italic">
						{frontmatter.author} &mdash; {frontmatter.date} &mdash; {timeToRead}{" "}
						Minute Read
					</p>
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
				author
				date
			}
			html
			timeToRead
		}
	}
`;

export default Post;
