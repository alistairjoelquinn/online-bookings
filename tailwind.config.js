/* eslint-disable global-require */
/* eslint-disable prettier/prettier */
module.exports = {
    mode: 'jit',
    content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    darkMode: 'class',
    theme: {
        extend: {
            fontFamily: {
                lora: ['Lora', 'serif'],
            },
            colors: {
                offwhite: '#F0F0F0',
                shroud: 'rgb(75 85 99)',
            },
            typography: theme => ({
                dark: {
                    css: {
                        color: theme('colors.gray.400'),
                        '[class~="lead"]': {
                            color: theme('colors.gray.300'),
                        },
                        a: {
                            color: theme('colors.purple.400'),
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
            }),
            keyframes: {
                reveal: {
                    '0%': { opacity: 0 },
                    '100%': { opacity: 1 },
                },
                shroud: {
                    '0%': { opacity: 0 },
                    '100%': { opacity: 0.7 },
                },
            },
            animation: {
                reveal: 'reveal 0.5s ease-in-out',
                shroud: 'shroud 0.5s ease-in',
            },
        },
    },
    variants: {
        extend: {
            typography: ['dark'],
        },
    },
};
