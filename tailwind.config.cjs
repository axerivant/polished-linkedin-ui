/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				800: '#08090A',
				700: '#1E2226',
				600: '#24292E',
				500: '#475058',
				100: '#FFFFFF'
			}
		}
	},
	plugins: []
}
