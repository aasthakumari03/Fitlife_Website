/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,jsx}",
        "./components/**/*.{js,jsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                gothic: ['var(--font-pirata)'],
            },
        },
    },
    plugins: [],
};
