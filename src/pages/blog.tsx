import React from "react";
import { graphql, Link } from "gatsby";
import Helmet from "react-helmet";
import Layout from "../layouts/Simple.tsx";

interface Props {}

const Members: React.FC<Props> = ({ data }) => {
	return (
		<Layout>
			<Helmet>
				<title>Blog Posts | Grant Robotics</title>
			</Helmet>

			<div className="max-w-prose py-32 mx-4 sm:mx-auto text-xl text-black dark:text-white">
				<div className="prose prose-xl dark:prose-dark mb-12">
					<h1>Blog Posts</h1>
					<hr />
				</div>

				<div className="grid grid-cols-1 auto-rows-min gap-4">
					{data.allMarkdownRemark.nodes.map(({ frontmatter, fields }) => (
						<Link to={fields.slug} className="nodefault">
							<h2 className="text-3xl font-serif">{frontmatter.title}</h2>
							<span className="italic">{frontmatter.date}</span>
						</Link>
					))}
				</div>
			</div>
		</Layout>
	);
};

export const query = graphql`
	query {
		allMarkdownRemark(
			filter: { fields: { type: { eq: "post" } } }
			sort: { fields: fields___creationTime, order: DESC }
		) {
			nodes {
				frontmatter {
					date
					title
				}
				fields {
					slug
				}
			}
		}
	}
`;

export default Members;
