import React from "react";
import Helmet from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";
import Header from "./Header";

interface Props {}

const Layout: React.FC<Props> = ({ children }) => {
	const data = useStaticQuery(graphql`
		query LayoutQuery {
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
		<>
			<Helmet>
				<title>{data.site.siteMetadata.title}</title>
				<meta name="description" content={data.site.siteMetadata.description} />
				<meta name="author" content={data.site.siteMetadata.author} />
			</Helmet>

			<Header />

			{children}
		</>
	);
};

export default Layout;
