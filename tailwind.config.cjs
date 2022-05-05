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
                sans: ['ManropeGX', ...defaultTheme.fontFamily.sans],
            },
            fontSize: {
                base: ['18px', '34px'],
            },
            typography: {
                DEFAULT: {
                    css: {
                        p: {
                            fontWeight: 300,
                        },
                        li: {
                            fontWeight: 300,
                        }
                    }
                }
            }
        }
    },
    plugins: [
        require('@tailwindcss/typography'),
        require('@tailwindcss/forms'),
    ]
};