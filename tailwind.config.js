/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./index.html'],
    theme: {
        extend: {
            colors: {
                'neutral': {
                    100: '#F2EAE2',
                    500: '#6C7289',
                    900: '#1C232B',
                },
                'green': {
                    500: '#3D8168',
                    700: '#1A4032',
                },
            },
            fontFamily: {
                'sans': ['Montserrat', 'sans-serif'],
                'serif': ['Fraunces', 'serif'],
            },
        },
    },
    plugins: [],
}

