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
		<div className="h-screen bg-green-300">
			<Helmet>
				<title>{data.site.siteMetadata.title}</title>
				<meta name="description" content={data.site.siteMetadata.description} />
				<meta name="author" content={data.site.siteMetadata.author} />
			</Helmet>

			<div className="fixed w-screen">
				<Header />
			</div>

			<div className="md:grid grid-cols-2 lg:grid-rows-auto-screen">
				{children}
			</div>
		</div>
	);
};

export default Layout;
