module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                'navy' : '#22333b',
                'cream-100' : '#eae0d5',
                'cream-200' : '#c6ac8f',
                'cream-300' : '#5e503f'
            },
            backgroundColor: ['checked'],
            borderColor: ['checked'],
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}