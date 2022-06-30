module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
        "./sections/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'light-grey': '#e1dfdd'
            },
            keyframes: {
                slide: {
                    '0%, 100%': { transform: 'translate(0%)' },
                    '50%': { transform: 'translate(-100%)' },
                },
                slideReverse: {
                    '0%, 100%': { transform: 'translate(0%)' },
                    '50%': { transform: 'translate(50%)' },
                },
                rotate: {
                    'from': { transform: 'perspective(200rem) rotateY(0deg)' },
                    'to': { transform: 'perspective(200rem) rotateY(360deg)' },
                },
                fadein: {
                    'from': { opacity: '0' },
                    'to': { opacity: '1' }
                },
                fadeout: {
                    'from': { opacity: '1' },
                    'to': { opacity: '0' }
                },
                infiniteXSlide: {
                    'from': { transform: 'translateX(100%)' },
                    'to': { transform: 'translateX(-100%)' }
                },
                infiniteYSlide: {
                    'from': { transform: 'translateY(100%)' },
                    'to': { transform: 'translateY(-100%)' }
                }
            },
            animation: {
                slide: 'slide 15s ease-in-out infinite',
                slideReverse: 'slideReverse 20s ease-in-out infinite',
                rotate: 'rotate 10s ease-in-out infinite',
                rotateReverse: 'rotate 10s ease-in-out infinite reverse',
                fadein: 'fadein 0.5s ease-in-out forwards',
                fadeout: 'fadeout 0.5s ease-in-out forwards',
                infiniteXSlide: 'infiniteXSlide 30s linear infinite',
                infiniteXSlideDelay: 'infiniteXSlide 30s linear 15s infinite',
                infiniteYSlide: 'infiniteYSlide 30s linear infinite',
                infiniteYSlideDelay: 'infiniteYSlide 30s linear 15s infinite'
            },
            boxShadow: {
                up: '0 -25px 50px -12px rgb(0 0 0 / 0.25)'
            },
            spacing: {
                'pal': 'max(20px, 5vmin)',
                '2pal': 'calc(2 * max(20px, 5vmin))',
                '3pal': 'calc(3 * max(20px, 5vmin))'
            }
        },
    },
    plugins: [
        require('@tailwindcss/forms'),
    ]
}