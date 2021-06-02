import React from "react";
import Helmet from "react-helmet";
import Layout from "../layouts/Simple.tsx";

interface Props {}

const NotFound: React.FC<Props> = (_props) => (
	<Layout>
		<Helmet>
			<title>404 Not Found | Grant Robotics</title>
		</Helmet>

		<div className="flex flex-col h-screen items-center justify-center text-black dark:text-white">
			<h1 className="text-10xl font-serif">404</h1>
			<p className="text-xl">Sorry, there's no page here.</p>
		</div>
	</Layout>
);

export default NotFound;
