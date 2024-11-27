/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        screens: {
            sm: '640px',
            md: '821px',
            lg: '1024px',
            xl: '1280px',
            '2xl': '1536px',
        },
        extend: {
            fontFamily: {
                sans: ['Geist Sans', 'sans-serif'],
                inter: ['Inter', 'sans-serif'],
                dm: ['DM Serif Text', 'serif'],
                fira: ['Fira Sans', 'sans-serif'],
                open: ['Open Sans', 'sans-serif'],
                kiona: ['Kiona', 'sans-serif'],
            },
            backgroundImage: {
                'light-bg': "url('/drew-beamer-tf-dVnIN8sk-unsplash.jpg')",
                'dark-bg': "url('/pawel-czerwinski-5mhH4db_79I-unsplash.jpg')",
            },
        },
    },
    plugins: [],
    darkMode: 'class',
}
