const colors = require("tailwindcss/colors");
const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
	purge: ["public/**/*.html", "src/**/*.tsx", "content/**/*.md"],
	darkMode: "media",
	theme: {
		colors: {
			transparent: "transparent",
			current: "currentColor",
			black: colors.coolGray[800],
			white: colors.coolGray[50],
			blue: colors.blue,
		},
		extend: {
			fontFamily: {
				sans: ["Karla", ...fontFamily.sans],
				serif: ["Spectral", ...fontFamily.serif],
			},
			fontSize: {
				"10xl": "12rem",
				"11xl": "16rem",
			},
			typography: (theme) => ({
				DEFAULT: {
					css: {
						color: theme("colors.black"),
						"h1,h2,h3,h4,h5,h6": {
							color: theme("colors.black"),
							fontFamily: "Spectral",
							fontWeight: 400,
						},
						hr: {
							borderColor: theme("colors.black"),
						},
						strong: {
							color: theme("colors.black"),
						},
						a: {
							color: theme("colors.blue.700"),
							"&:hover": {
								color: theme("colors.blue.500"),
							},
						},
						img: {
							width: "100%",
						},
					},
				},

				dark: {
					css: {
						color: theme("colors.white"),
						"h1,h2,h3,h4,h5,h6": {
							color: theme("colors.white"),
						},
						hr: {
							borderColor: theme("colors.white"),
						},
						strong: {
							color: theme("colors.white"),
						},
						a: {
							color: theme("colors.blue.400"),
							"&:hover": {
								color: theme("colors.blue.600"),
							},
						},
					},
				},
			}),
		},
	},
	variants: {
		extend: {
			typography: ["dark"],
		},
	},
	plugins: [require("@tailwindcss/typography")],
};
