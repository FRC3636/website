const colors = require("tailwindcss/colors");

module.exports = {
	purge: ["public/**/*.html", "src/**/*.tsx"],
	darkMode: "media",
	theme: {
		colors: {
			transparent: "transparent",
			current: "currentColor",
			black: colors.coolGray[800],
			white: colors.coolGray[50],
		},
		extend: {
			fontFamily: {
				sans: ["Karla", "ui-sans-serif", "system-ui", "sans-serif"],
				serif: ["Spectral", "ui-serif"],
			},
			fontSize: {
				"10xl": "12rem",
				"11xl": "16rem",
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
