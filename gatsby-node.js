const path = require("path");
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.onCreateNode = ({ node, getNode, actions }) => {
	const { createNodeField } = actions;

	if (node.internal.type === `MarkdownRemark`) {
		const file = getNode(node.parent);

		createNodeField({
			node,
			name: `slug`,
			value: path.posix.join(
				{
					pages: `/`,
					members: `/members`,
					posts: `/blog`,
				}[file.sourceInstanceName],
				createFilePath({
					node,
					getNode,
				})
			),
		});
		createNodeField({
			node,
			name: `type`,
			value: {
				pages: `page`,
				members: `member`,
				posts: `post`,
			}[file.sourceInstanceName],
		});
		createNodeField({
			node,
			name: `creationTime`,
			value: file.birthtimeMs,
		});
		createNodeField({
			node,
			name: `template`,
			value: {
				pages: `./src/templates/page.tsx`,
				members: `./src/templates/member.tsx`,
				posts: `./src/templates/post.tsx`,
			}[file.sourceInstanceName],
		});
	}
};

exports.createPages = async ({ graphql, actions }) => {
	const { createPage } = actions;

	const result = await graphql(`
		query {
			allMarkdownRemark {
				nodes {
					id
					fields {
						slug
						template
					}
				}
			}
		}
	`);

	result.data.allMarkdownRemark.nodes.forEach(({ fields, id }) => {
		createPage({
			path: fields.slug,
			component: require.resolve(fields.template),
			context: {
				id,
			},
		});
	});
};
