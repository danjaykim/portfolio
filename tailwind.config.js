/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        screens: {
            sm: '640px',
            md: '768px',
            lg: '1024px',
            xl: '1280px',
            '2xl': '1536px',
        },
        extend: {
            fontFamily: {
                sans: ['Geist Sans', 'sans-serif'],
                inter: ['Inter', 'sans-serif'],
            },
            colors: {
                dkgray: 'rgb(29,29,29)',
            },
        },
    },
    plugins: [],
    darkMode: 'class',
}
