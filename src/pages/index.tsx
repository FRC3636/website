import React from "react";
import Layout from "../components/Layout";
import SimpleSection from "../components/sections/Simple.tsx";

interface Props {}

const Index: React.FC<Props> = (_props) => (
	<Layout>
		<>
			<SimpleSection className="hidden md:flex colors-dark dark:colors-light">
				<span className="self-center transform -rotate-90 text-11xl font-serif">
					3636
				</span>
			</SimpleSection>
			<SimpleSection className="colors-light dark:colors-dark">
				<h1 className="font-serif text-5xl my-2">Grant Robotics</h1>
				<p className="leading-snug">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Blandit
					volutpat maecenas volutpat blandit aliquam etiam. Enim diam vulputate
					ut pharetra sit amet aliquam. Ut diam quam nulla porttitor massa id
					neque aliquam. Mattis vulputate enim nulla aliquet porttitor lacus
					luctus accumsan tortor. Libero justo laoreet sit amet cursus sit amet
					dictum. Aliquet porttitor lacus luctus accumsan tortor posuere ac.
					Interdum velit euismod in pellentesque massa placerat duis ultricies
					lacus. Egestas tellus rutrum tellus pellentesque. Vel orci porta non
					pulvinar neque laoreet suspendisse. Fermentum leo vel orci porta non
					pulvinar neque. Leo vel fringilla est ullamcorper. Sit amet porttitor
					eget dolor morbi non arcu risus quis. Sit amet venenatis urna cursus
					eget nunc scelerisque viverra mauris. Nunc mi ipsum faucibus vitae
					aliquet. Orci porta non pulvinar neque. Ut ornare lectus sit amet est.
					Cras fermentum odio eu feugiat pretium nibh ipsum. Ornare lectus sit
					amet est. Congue eu consequat ac felis donec et.
				</p>
			</SimpleSection>
		</>
	</Layout>
);

export default Index;
