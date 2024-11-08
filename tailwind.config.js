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
                dm: ['DM Serif Text', 'serif'],
                invasion: ['Invasion2000', 'serif'],
                fira: ['Fira Sans', 'sans-serif'],
                open: ['Open Sans', 'sans-serif'],
                mengka: ['Mengka', 'sans-serif'],
            },
            backgroundImage: {
                'light-bg': "url('/Texturelabs_Stone_159L.jpg')",
                'dark-bg': "url('/Texturelabs_Grunge_208M.jpg')",
            },
        },
    },
    plugins: [],
    darkMode: 'class',
}
