import React from "react";
import Layout from "../components/Layout";
import SimpleSection from "../components/sections/Simple.tsx";
import { AiOutlineRobot } from "react-icons/ai";
import data from "../../content/index.yml";

interface Props {}

const Index: React.FC<Props> = (_props) => (
	<Layout>
		{data.sections.map(({ title, visual: visualName, content }) => (
			<>
				<SimpleSection className="hidden md:flex colors-dark dark:colors-light">
					<Visual name={visualName} />
				</SimpleSection>
				<SimpleSection className="colors-light dark:colors-dark">
					<h1 className="font-serif text-5xl my-2">{title}</h1>
					<p className="leading-snug">{content}</p>
				</SimpleSection>
			</>
		))}
	</Layout>
);

const Visual: React.FC<{ name: string }> = ({ name }) => {
	const vis = {
		teamNumber: {
      content: (_) => "3636",
			containerClasses: "transform -rotate-90",
		},
		robot: {
			content: AiOutlineRobot,
			containerClasses: "",
		},
	}[name] ?? {
		content: React.Fragment,
		containerClasses: "",
	};

	return (
		<span
			className={`self-center text-11xl font-serif ${vis.containerClasses}`}
		>
			<vis.content />
		</span>
	);
};

export default Index;
