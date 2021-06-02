import React from "react";
import Helmet from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

export interface Props {}

const Layout: React.FC<Props> = ({ children }) => {
	const data = useStaticQuery(graphql`
		query {
			site {
				siteMetadata {
					title
					description
					author
				}
			}
		}
	`);

	return (
		<div className="min-h-screen bg-white dark:bg-black">
			<Helmet>
				<title>{data.site.siteMetadata.title}</title>
				<meta name="description" content={data.site.siteMetadata.description} />
				<meta name="author" content={data.site.siteMetadata.author} />
			</Helmet>

			{children}
		</div>
	);
};

export default Layout;
