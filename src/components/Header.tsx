import React from "react";
import { Link } from "gatsby";
import { Popover } from "@headlessui/react";
import { Divide as Hamburger } from "hamburger-react";
import Logo from "./Logo";

const navigation = [
	{ name: "About", href: "/about" },
	{ name: "Robots", href: "/robots" },
	{ name: "Competitions", href: "/competitions" },
];

interface Props {}

const Header: React.FC<Props> = (_props) => {
	return (
		<nav className="flex justify-between">
			<div className="flex h-12 self-start items-center px-2 colors-dark dark:colors-light rounded-br">
				<Logo />
			</div>

			<div className="colors-dark dark:colors-light rounded-bl">
				{/* Dropdown Menu */}
				<Popover className="flex flex-col sm:hidden">
					{({ open }) => (
						<>
							<Popover.Button className="ml-auto">
								<Hamburger toggled={open} size={25} />
							</Popover.Button>

							<Popover.Panel className="relative flex flex-col items-end justify-between p-4 w-full">
								{navigation.map(({ name, href }) => (
									<Link
										to={href}
										className="text-lg"
										activeClassName="underline"
									>
										<h1>{name}</h1>
									</Link>
								))}
							</Popover.Panel>
						</>
					)}
				</Popover>

				{/* Regular Menu */}
				<div className="items-center space-x-2 px-4 hidden h-full sm:flex">
					{navigation.map(({ name, href }) => (
						<Link to={href} className="text-lg" activeClassName="underline">
							<h1 className="text-xl">{name}</h1>
						</Link>
					))}
				</div>
			</div>
		</nav>
	);
};

export default Header;
