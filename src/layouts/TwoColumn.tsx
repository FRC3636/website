import React from "react";
import Base, { Props as BaseProps } from "./Base.tsx";
import Header from "../components/Header.tsx";

interface Props extends BaseProps {}

const Layout: React.FC<Props> = (props) => {
  const { children } = props;
  
	return (
		<Base {...props}>
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
