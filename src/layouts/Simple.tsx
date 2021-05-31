import React from "react";
import Base from "./Base.tsx";
import Header from "../components/Header";

interface Props {}

const Layout: React.FC<Props> = ({ children }) => {
	return (
		<Base>
			<div className="fixed w-full">
				<Header />
			</div>

			<div className="h-full">
				{children}
			</div>
		</Base>
	);
};

export default Layout;
