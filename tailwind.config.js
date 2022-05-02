/* eslint-disable global-require */
/* eslint-disable prettier/prettier */
module.exports = {
    content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    darkMode: 'media',
    theme: {
        extend: {
            fontFamily: {
                dank: ['DankMono', 'sans-serif'],
            },
        },
        colors: {
            mybrown: '#CF8E80',
            mypink: '#FCDDF2',
            myyellow: '#F9EA9A',
            myblack: '#2F2F2F',
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
        require('@tailwindcss/forms'),
        require('@tailwindcss/aspect-ratio'),
        require('@tailwindcss/line-clamp'),
    ],
};
