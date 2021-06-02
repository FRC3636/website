import React from "react";
import Base, { Props as BaseProps } from "./Base.tsx";
import Header from "../components/Header";

interface Props extends BaseProps {}

const Layout: React.FC<Props> = (props) => {
	const { children } = props;

	return (
		<Base {...props}>
			<div className="fixed w-full">
				<Header />
			</div>

			<div className="h-full">{children}</div>
		</Base>
	);
};

export default Layout;
