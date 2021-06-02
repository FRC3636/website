import React from "react";
import { BiGlobe } from "react-icons/bi";

interface Props {
	linkType: string;
	url: string;
}

const linkTypes = {
	website: (url) => ({
		label: () => "Website",
		url: () => url,
		icon: BiGlobe,
	}),
};

const LinkCard: React.FC<Props> = ({ linkType, url }) => {
	const link = linkTypes[linkType](url);

	return (
		<a href={url} target="_blank" rel="noreferrer">
			<div className="flex flex-row justify-between items-center h-20 px-3 text-black dark:text-white rounded border border-black dark:border-white">
				<link.icon className="text-6xl" />
				<div class="text-right">
					<p className="text-xl font-bold font-serif">
						<link.label />
					</p>
					<p className="underline text-sm">
						<link.url />
					</p>
				</div>
			</div>
		</a>
	);
};

export default LinkCard;
