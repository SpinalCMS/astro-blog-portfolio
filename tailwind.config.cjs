// tailwind.config.cjs
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    content: [
        './public/**/*.html',
        './src/**/*.{astro,js,jsx,ts,tsx}',
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter var', ...defaultTheme.fontFamily.sans],
            },
            fontSize: {
                base: ['18px', '34px'],
            }
        }
    },
    plugins: [
        require('@tailwindcss/typography'),
    ]
};