import React from "react";
import Layout, { Section } from "../layouts/TwoColumn.tsx";
import { AiOutlineRobot } from "react-icons/ai";
import { BsCodeSlash } from "react-icons/bs";
import data from "../../content/home.yml";

interface Props {}

const Index: React.FC<Props> = (_props) => (
	<Layout>
		{data.sections.map(({ title, visual: visualName, content }) => (
			<React.Fragment key={title}>
				<Section className="hidden md:flex colors-dark dark:colors-light">
					<Visual name={visualName} />
				</Section>
				<Section className="colors-light dark:colors-dark text-lg">
					<h1 className="font-serif text-5xl my-4">{title}</h1>
					<p className="leading-snug">{content}</p>
				</Section>
			</React.Fragment>
		))}
	</Layout>
);

const Visual: React.FC<{ name: string }> = ({ name }) => {
	const vis = {
		teamNumber: {
      content: (_) => <>3636</>,
			containerClasses: ["transform", "-rotate-90"],
		},
		robot: {
			content: AiOutlineRobot,
		},
		code: {
			content: BsCodeSlash,
		},
	}[name] ?? {
    content: (_: any) => <span dangerouslySetInnerHTML={{ __html: name }} />,
	};

	return (
		<span
			className={`self-center text-11xl font-serif ${(
				vis.containerClasses ?? []
			).join(" ")}`}
		>
			<vis.content />
		</span>
	);
};

export default Index;
