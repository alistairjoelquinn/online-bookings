/* eslint-disable global-require */
/* eslint-disable prettier/prettier */
module.exports = {
    content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                lora: ['Lora', 'serif'],
                josefin: ['Josefin', 'sans-serif'],
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
    plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms')],
};
