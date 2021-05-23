module.exports = {
	siteMetadata: {
		title: `Grant Robotics`,
		description: `Grant High School's Robotics Team.`,
		author: `Max Niederman`,
	},
	plugins: [
		`gatsby-plugin-react-helmet`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`,
			},
		},
		"gatsby-plugin-postcss",
		{
			resolve: "gatsby-plugin-purgecss",
			options: {
				tailwind: true,
				purgeOnly: ["src/css/index.css"],
			},
		},
		`gatsby-plugin-typescript`,
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `Grant Robotics`,
				short_name: `starter`,
				start_url: `/`,
				background_color: `#663399`,
				theme_color: `#663399`,
				display: `minimal-ui`,
				icon: `src/images/logo.png`,
			},
		},
		{
			resolve: "gatsby-plugin-eslint",
			options: {
				test: /\.ts$|\.tsx$/,
				exclude: /(node_modules|.cache|public)/,
				stages: ["develop", "build-javascript"],
				options: {
					emitWarning: true,
					failOnError: false,
				},
			},
		},
		`gatsby-plugin-offline`,
	],
};
