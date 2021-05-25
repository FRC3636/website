import React from "react";
import { SectionProps } from "./";

interface Props extends SectionProps {}

const Simple: React.FC<Props> = ({ children, className }) => (
	<div className={`flex flex-row justify-center items-center ${className}`}>
		<div className="flex flex-col justify-center flex-1 my-24 mx-8 max-w-sm lg:max-w-md">
			{children}
		</div>
	</div>
);

export default Simple;
