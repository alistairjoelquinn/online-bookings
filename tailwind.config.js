/* eslint-disable global-require */
/* eslint-disable prettier/prettier */
module.exports = {
    mode: 'jit',
    content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    darkMode: 'media',
    theme: {
        extend: {
            fontFamily: {
                dank: ['DankMono', 'sans-serif'],
            },
            typography: theme => ({
                dark: {
                    css: {
                        color: theme('colors.gray.400'),
                        '[class~="lead"]': {
                            color: theme('colors.gray.300'),
                        },
                        a: {
                            color: theme('colors.blue.400'),
                        },
                        strong: {
                            color: theme('colors.white'),
                        },
                        'ul > li::before': {
                            color: theme('colors.gray.600'),
                        },
                        h2: {
                            color: theme('colors.white'),
                        },
                        figcaption: {
                            color: theme('colors.gray.400'),
                        },
                        thead: {
                            color: theme('colors.white'),
                            borderBottomColor: theme('colors.gray.400'),
                        },
                        'tbody tr': {
                            borderBottomColor: theme('colors.gray.600'),
                        },
                    },
                },
                DEFAULT: {
                    css: {
                        // color: theme('colors.red.600'),
                    },
                },
            }),
        },
        colors: {
            mybrown: '#CF8E80',
            mypink: '#FCDDF2',
            myyellow: '#F9EA9A',
            myblack: '#2F2F2F',
        },
    },
    variants: {
        extend: {
            typography: ['dark'],
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
        require('@tailwindcss/forms'),
        require('@tailwindcss/aspect-ratio'),
        require('@tailwindcss/line-clamp'),
    ],
};
