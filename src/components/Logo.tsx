import React from "react";

interface Props {
	className?: string;
}

const Logo: React.FC<Props> = ({ className = "" }) => (
	<h1
		className={`text-4xl font-serif font-bold inline-block align-middle ${className}`}
	>
		G.
	</h1>
);

export default Logo;
