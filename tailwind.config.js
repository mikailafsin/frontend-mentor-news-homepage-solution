/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./*.{html,js}'],
    theme: {
        extend: {
            colors: {
                'primary-soft-orange': 'hsl(35, 77%, 62%)',
                'primary-soft-red': 'hsl(5, 85%, 63%)',
                'neutral-off-white': 'hsl(36, 100%, 99%)',
                'neutral-grayish-blue': 'hsl(233, 8%, 79%)',
                'neutral-dark-grayish-blue': 'hsl(236, 13%, 42%)',
                'neutral-very-dark-blue': 'hsl(240, 100%, 5%)',
                'attribution-link': 'hsl(228, 45%, 44%)',
            },
            fontFamily: {
                inter: ['Inter', 'sans-serif'],
            },
        },
    },
    plugins: [],
};
