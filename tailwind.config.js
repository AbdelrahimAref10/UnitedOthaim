/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Primary brand colors - Teal (Professional Theme Style)
        primary: {
          light: '#0d9488', // Teal-600 for light mode
          dark: '#14b8a6',   // Teal-500 for dark mode
          DEFAULT: '#0d9488',
          50: '#f0fdfa',
          100: '#ccfbf1',
          200: '#99f6e4',
          300: '#5eead4',
          400: '#2dd4bf',
          500: '#14b8a6',
          600: '#0d9488',
          700: '#0f766e',
          800: '#115e59',
          900: '#134e4a',
        },
        // Secondary accent colors - Teal (Professional consulting accent)
        secondary: {
          light: '#0d9488', // Teal-600 for light mode
          dark: '#14b8a6',  // Teal-500 for dark mode
          DEFAULT: '#0d9488',
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
          // Button colors - Teal (Professional Theme Style)
          button: {
            primary: {
              light: '#0d9488',
              dark: '#14b8a6',
              DEFAULT: '#0d9488',
            },
          secondary: {
            light: '#64748b',
            dark: '#94a3b8',
            DEFAULT: '#64748b',
          },
          accent: {
            light: '#0d9488',
            dark: '#14b8a6',
            DEFAULT: '#0d9488',
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
