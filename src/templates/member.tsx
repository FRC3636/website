import React from "react";
import { graphql } from "gatsby";
import Helmet from "react-helmet";
import Layout from "../layouts/Simple.tsx";
import LinkCard from "../components/LinkCard.tsx";

interface Props {
	data: {
		markdownRemark: {
			frontmatter: {
				title: string;
				position: string;
				pronouns: string;
				links: {
					type: string;
					url: string;
				}[];
			};
			html: string;
		};
	};
}

const Member: React.FC<Props> = ({ data }) => {
	const post = data.markdownRemark;

	post.frontmatter.links ??= [];

	return (
		<Layout>
			<Helmet>
				<title>{post.frontmatter.title} | Grant Robotics</title>
			</Helmet>

			<div className="max-w-prose text-xl py-32 mx-4 sm:mx-auto">
				<div className="mb-12 text-black dark:text-white">
					<h1 className="mb-2 font-serif text-6xl">{post.frontmatter.title}</h1>
					<span className="text-xl italic">{post.frontmatter.position} &mdash; {post.frontmatter.pronouns}</span>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 auto-rows-min gap-3 my-8">
					{post.frontmatter.links.map(({ type, url }) => (
						<LinkCard linkType={type} url={url} />
					))}
				</div>

				<div className="prose prose-xl dark:prose-dark">
					<div dangerouslySetInnerHTML={{ __html: post.html }} />
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
				pronouns
				position
				links {
					type
					url
				}
			}
			html
		}
	}
`;

export default Member;
