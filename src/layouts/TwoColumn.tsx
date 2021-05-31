import React from "react";
import Base from "./Base.tsx";
import Header from "../components/Header.tsx";

interface Props {}

const Layout: React.FC<Props> = ({ children }) => {
	return (
		<Base>
			<div className="fixed w-full">
				<Header />
			</div>

			<div className="md:grid grid-cols-2 lg:grid-rows-auto-screen">
				{children}
			</div>
		</Base>
	);
};

export default Layout;
