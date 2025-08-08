/** @type {import('tailwindcss').Config} */
export default {
<<<<<<< HEAD
    darkMode: 'class',
    content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                bricolage: ['Bricolage Grotesque', 'sans-serif'],
            },
=======
    content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
    theme: {
        extend: {
            animation: {
                'ping-slow': 'ping 3s cubic-bezier(0, 0, 0.2, 1) infinite',
            },
            colors: {
                'primary': '#334155', // Soft Navy
                'secondary': '#E5E7EB', // Light Gray
                'accent': '#14B8A6', // Teal Green
            }
>>>>>>> f73cf9e4394cdd5da92d32a8ab48aa0eee2bd59c
        },
    },
    plugins: [],
};
