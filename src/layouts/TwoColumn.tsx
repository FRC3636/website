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

interface SectionProps {
	className?: string;
}
export const Section: React.FC<SectionProps> = ({
	children,
	className = "",
}) => (
	<div className={`flex flex-row justify-center items-center ${className}`}>
		<div className="flex flex-col justify-center flex-1 my-24 mx-4 max-w-sm lg:max-w-md">
			{children}
		</div>
	</div>
);

export default Layout;
