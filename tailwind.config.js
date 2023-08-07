module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
        "./sections/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                'light-grey': '#e1dfdd',
                'dark-grey': '#0D0D0D',
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
                    '0%': { opacity: '0' },
                    '1%': { opacity: '0' },
                    '100%': { opacity: '1' }
                },
                fadeout: {
                    '0%': { opacity: '1' },
                    '99%': { opacity: '0' },
                    '100%': { opacity: '0' }
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
                infiniteXSlide: 'infiniteXSlide 40s linear infinite',
                infiniteXSlideDelay: 'infiniteXSlide 40s linear 20s infinite',
                infiniteYSlide: 'infiniteYSlide 40s linear infinite',
                infiniteYSlideDelay: 'infiniteYSlide 40s linear 20s infinite'
            },
            boxShadow: {
                up: '0 -25px 50px -12px rgb(0 0 0 / 0.25)'
            },
            spacing: {
                'pal': 'max(20px, 5vmin)',
                '2pal': 'calc(2 * max(20px, 5vmin))',
                '3pal': 'calc(3 * max(20px, 5vmin))',
                '4pal': 'calc(4 * max(20px, 5vmin))',
                'lap': 'calc(100% - max(20px, 5vmin))',
                '2lap': 'calc(100% - calc(2 * max(20px, 5vmin)))',
                '3lap': 'calc(100% - calc(3 * max(20px, 5vmin)))',
                '4lap': 'calc(100% - calc(4 * max(20px, 5vmin)))'
            },
            lineHeight: {
                'pal': 'max(20px, 5vmin)'
            },
            dropShadow: {
                'white': ['0 0 4px rgb(255 255 255 / 0.9)']
            }
        },
    },
    plugins: [
        require('@tailwindcss/forms'),
    ]
}