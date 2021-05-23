import React from "react";
import { Link } from "gatsby";
import { Popover } from "@headlessui/react";
import { Divide as Hamburger } from "hamburger-react";
import Logo from "./Logo";

const navigation = [
	{ name: "About", href: "/" },
	{ name: "Robots", href: "/" },
	{ name: "Competitions", href: "/" },
];

interface Props {}

const Header: React.FC<Props> = (_props) => {
	return (
		<div className="flex justify-between px-2 py-1">
			<Logo />

			<nav>
				{/* Dropdown Menu */}
				<Popover className="flex flex-col sm:hidden">
					{({ open }) => (
						<>
							<Popover.Button className="ml-auto">
								<Hamburger toggled={open} />
							</Popover.Button>

							<Popover.Panel className="relative flex flex-col items-end justify-between w-full">
								{navigation.map(({ name, href }) => (
									<Link
										to={href}
										className="text-lg"
										activeClassName="underline"
									>
										{name}
									</Link>
								))}
							</Popover.Panel>
						</>
					)}
				</Popover>

				{/* Regular Menu */}
				<div className="items-center hidden h-full sm:flex">
					{navigation.map(({ name, href }) => (
						<Link
							to={href}
							className="px-2 text-lg"
							activeClassName="underline"
						>
							{name}
						</Link>
					))}
				</div>
			</nav>
		</div>
	);
};

export default Header;
