/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#513d30',
        secondary: '#654d3c',
        background:'#c69d4d',
        textCont: '#654d3c',
        text: '#c69d4d',
        text2: '#afa39a',
        bgIcon: '#c59c4c',
        iconHover: '#654d3c',
        smText: '#afa39a',
        white: '#ffffff',
        subtitle: 'rgb(161, 161, 170)',
      },
    },
  },
  plugins: [],
};
