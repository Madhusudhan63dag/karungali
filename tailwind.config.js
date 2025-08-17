 /** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gold: {
          400: '#FFA500',
          500: '#FFD700',
        },
        dark: {
          800: '#1a1a1a',
          900: '#000000',
        }
      },
      animation: {
        'pulse-gold': 'pulse-gold 3s ease-in-out infinite',
        'float': 'float 2s ease-in-out infinite',
      },
      keyframes: {
        'pulse-gold': {
          '0%, 100%': { 
            transform: 'scale(1)',
            boxShadow: '0 0 20px rgba(255, 215, 0, 0.3)'
          },
          '50%': { 
            transform: 'scale(1.05)',
            boxShadow: '0 0 40px rgba(255, 215, 0, 0.5)'
          },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}