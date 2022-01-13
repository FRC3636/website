module.exports = {
	siteMetadata: {
		title: `Grant Robotics`,
		description: `Grant High School's Robotics Team.`,
		author: `Max Niederman`,
	},
	plugins: [
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`,
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `pages`,
				path: `${__dirname}/content/pages`,
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `members`,
				path: `${__dirname}/content/members`,
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `posts`,
				path: `${__dirname}/content/posts`,
			},
		},
		`gatsby-plugin-netlify-cms`,
		{
			resolve: `gatsby-transformer-remark`,
			options: {
				plugins: [
					`gatsby-remark-copy-linked-files`,
					`gatsby-remark-smartypants`,
				],
			},
		},
		`gatsby-plugin-postcss`,
		{
			resolve: `gatsby-plugin-purgecss`,
			options: {
				tailwind: true,
				purgeOnly: [`src/css/index.css`],
			},
		},
		`gatsby-plugin-typescript`,
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `Grant Robotics`,
				short_name: `starter`,
				start_url: `/`,
				background_color: `#F9FAFB`,
				theme_color: `#1F2937`,
				display: `minimal-ui`,
				icon: `src/images/logo.svg`,
			},
		},
		`gatsby-plugin-react-helmet`,
		{
			resolve: `gatsby-plugin-eslint`,
			options: {
				test: /\.ts$|\.tsx$/,
				exclude: /(node_modules|.cache|public)/,
				stages: [`develop`, `build-javascript`],
				options: {
					emitWarning: true,
					failOnError: false,
				},
			},
		},
		`gatsby-plugin-offline`,
	],
	flags: {
		FAST_DEV: true,
		PARALLEL_SOURCING: true,
	}
};
