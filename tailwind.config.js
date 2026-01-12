/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Primary brand colors - Professional Dark Charcoal/Gold (Consulting Theme Style)
        primary: {
          light: '#1a1a1a', // Dark charcoal for light mode - Professional, sophisticated
          dark: '#2c2c2c',  // Lighter charcoal for dark mode
          DEFAULT: '#1a1a1a',
          50: '#f5f5f5',
          100: '#e0e0e0',
          200: '#bdbdbd',
          300: '#9e9e9e',
          400: '#757575',
          500: '#616161',
          600: '#424242',
          700: '#1a1a1a',
          800: '#141414',
          900: '#0a0a0a',
        },
        // Secondary accent colors - Gold/Amber (Professional consulting accent)
        secondary: {
          light: '#d4af37', // Gold for light mode
          dark: '#f4a460',  // Lighter gold/amber for dark mode
          DEFAULT: '#d4af37',
        },
        // Background colors
        background: {
          light: '#ffffff',
          dark: '#0f172a',
          DEFAULT: '#ffffff',
        },
        // Surface colors (cards, containers)
        surface: {
          light: '#f8fafc',
          dark: '#1e293b',
          DEFAULT: '#f8fafc',
        },
        // Text colors
        text: {
          light: '#1e293b',
          dark: '#f1f5f9',
          DEFAULT: '#1e293b',
        },
        // Border colors
        border: {
          light: '#e2e8f0',
          dark: '#334155',
          DEFAULT: '#e2e8f0',
        },
        // Error colors
        error: {
          light: '#dc2626',
          dark: '#f87171',
          DEFAULT: '#dc2626',
        },
        // Button colors - Professional Dark/Gold (Consulting Theme Style)
        button: {
          primary: {
            light: '#1a1a1a',
            dark: '#2c2c2c',
            DEFAULT: '#1a1a1a',
          },
          secondary: {
            light: '#64748b',
            dark: '#94a3b8',
            DEFAULT: '#64748b',
          },
          accent: {
            light: '#d4af37',
            dark: '#f4a460',
            DEFAULT: '#d4af37',
          },
        },
        // Card colors
        card: {
          bg: {
            light: '#ffffff',
            dark: '#1e293b',
            DEFAULT: '#ffffff',
          },
          border: {
            light: '#e2e8f0',
            dark: '#334155',
            DEFAULT: '#e2e8f0',
          },
        },
        // Sector-specific colors for business cycle
        sector: {
          elevator: {
            light: '#7c3aed',
            dark: '#a78bfa',
          },
          contracting: {
            light: '#dc2626',
            dark: '#f87171',
          },
          manufacturing: {
            light: '#ea580c',
            dark: '#fb923c',
          },
          development: {
            light: '#059669',
            dark: '#10b981',
          },
          investments: {
            light: '#0891b2',
            dark: '#22d3ee',
          },
          hotel: {
            light: '#be185d',
            dark: '#f472b6',
          },
          consulting: {
            light: '#7c2d12',
            dark: '#fdba74',
          },
          lowCurrent: {
            light: '#1a1a1a',
            dark: '#2c2c2c',
          },
          happyCheese: {
            light: '#ca8a04',
            dark: '#fbbf24',
          },
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        arabic: ['Cairo', 'Tajawal', 'sans-serif'],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.5s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
        'slide-in-left': 'slideInLeft 0.6s ease-out',
        'slide-in-right': 'slideInRight 0.6s ease-out',
        'bounce-in': 'bounceIn 0.8s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        slideInLeft: {
          '0%': { transform: 'translateX(-100px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(100px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        bounceIn: {
          '0%': { transform: 'scale(0.3)', opacity: '0' },
          '50%': { transform: 'scale(1.05)' },
          '70%': { transform: 'scale(0.9)' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}
