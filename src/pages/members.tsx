import React from "react";
import { graphql, Link } from "gatsby";
import Helmet from "react-helmet";
import Layout from "../layouts/Simple.tsx";

interface Props {}

const Members: React.FC<Props> = ({ data }) => {
	let members: Map<string, string[]> = new Map();
	data.allMarkdownRemark.nodes.forEach(({ frontmatter, fields }) => {
		members.has(frontmatter.position) || members.set(frontmatter.position, []);
		members
			.get(frontmatter.position)
			.push({ name: frontmatter.name, slug: fields.slug });
	});
	members = new Map([...members.entries()].sort((a, b) => a.length > b.length));

	return (
		<Layout>
			<Helmet>
				<title>Members | Grant Robotics</title>
			</Helmet>

			<div className="prose prose-xl dark:prose-dark max-w-prose py-32 mx-4 sm:mx-auto">
				<h1>Team Members</h1>
				<hr />

				{[...members.entries()].map(([position, members]) => (
					<div key={position}>
						<h2>{position}</h2>

						{members.map(({ name, slug }) => (
							<Link to={slug} class="nodefault underline">{name}</Link>
						))}
					</div>
				))}
			</div>
		</Layout>
	);
};

export const query = graphql`
	query {
		allMarkdownRemark(filter: { fields: { type: { eq: "member" } } }) {
			nodes {
				fields {
					slug
				}
				frontmatter {
					position
					name
				}
			}
		}
	}
`;

export default Members;
