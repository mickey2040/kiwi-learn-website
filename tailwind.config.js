/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,js}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          main: '#00BFAE',
          light: '#5DF2D6',
          dark: '#00897B',
        },
        secondary: {
          main: '#FFD600',
          light: '#FFFF52',
          dark: '#C7A500',
        },
        accent: {
          main: '#FF7043',
          light: '#FFA270',
          dark: '#C63F17',
        },
        neutral: {
          main: '#F5F5F5',
          light: '#FFFFFF',
          dark: '#BDBDBD',
        },
        success: '#43A047',
        warning: '#FFB300',
        error: '#E53935',
      },
      fontFamily: {
        primary: ['Baloo 2', 'Comic Sans MS', 'Arial Rounded MT Bold', 'sans-serif'],
        secondary: ['Montserrat', 'Arial', 'sans-serif'],
      },
      fontSize: {
        'h1': ['2.5rem', { lineHeight: '1.1', fontWeight: '800' }],
        'h2': ['2rem', { lineHeight: '1.15', fontWeight: '700' }],
        'h3': ['1.5rem', { lineHeight: '1.2', fontWeight: '700' }],
        'h4': ['1.25rem', { lineHeight: '1.25', fontWeight: '600' }],
        'h5': ['1rem', { lineHeight: '1.3', fontWeight: '600' }],
        'body': ['1rem', { lineHeight: '1.6', fontWeight: '400' }],
        'caption': ['0.875rem', { lineHeight: '1.4', fontWeight: '400' }],
      },
      spacing: {
        '0': '0px',
        '1': '4px',
        '2': '8px',
        '3': '16px',
        '4': '24px',
        '5': '32px',
        '6': '48px',
        '7': '64px',
        '8': '96px',
      },
      borderRadius: {
        'button': '24px',
        'card': '16px',
        'input': '12px',
        'badge': '12px',
        'nav': '16px',
      },
      boxShadow: {
        'sm': '0 2px 4px rgba(0,0,0,0.05)',
        'md': '0 2px 8px rgba(0,0,0,0.08)',
        'lg': '0 2px 12px rgba(0,0,0,0.08)',
        'xl': '0 4px 20px rgba(0,0,0,0.12)',
        'primary': '0 2px 8px rgba(0,191,174,0.15)',
        'secondary': '0 2px 8px rgba(255,214,0,0.15)',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out',
        'fade-in-left': 'fadeInLeft 0.6s ease-out',
        'fade-in-right': 'fadeInRight 0.6s ease-out',
        'bounce': 'bounce 1s ease-in-out',
        'pulse': 'pulse 2s ease-in-out infinite',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        fadeInRight: {
          '0%': { opacity: '0', transform: 'translateX(30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
} 