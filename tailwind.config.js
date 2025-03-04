/** @type {import('tailwindcss').Config} */
export default {
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
        },
    },
    plugins: [],
};
