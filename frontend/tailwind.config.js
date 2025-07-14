/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,jsx}"],
    theme: {
        extend: {
            theme: {
                extend: {
                    colors: {
                        primary: '#4f46e5',
                        secondary: '#10b981',
                        dark: '#0f172a',
                        light: '#f8fafc',
                        accent: '#f59e0b',
                    },
                    colors: {
                        primary: 'var(--primary)',
                        secondary: 'var(--secondary)',
                        dark: 'var(--dark)',
                        light: 'var(--light)',
                        danger: 'var(--danger)',
                        warning: 'var(--warning)',
                    },
                    fontFamily: {
                        inter: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
                    },
                },
            }

        },
    },
    plugins: [],
};
