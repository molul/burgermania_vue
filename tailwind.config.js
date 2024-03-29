/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
		},
		fontFamily: {
			'condensed': ['Barlow Semi Condensed', 'Sans-serif'],
			'mainText': ['Raleway', 'Sans-serif']
		}
  },
  plugins: [
	],
}