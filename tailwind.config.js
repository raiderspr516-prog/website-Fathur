module.exports = {
  content: [
    "./pages/*.{html,js}",
    "./index.html",
    "./js/*.js",
    "./components/*.html"
  ],
  theme: {
    extend: {
      colors: {
        // Primary Colors
        primary: {
          DEFAULT: "#1B4332", // forest-green-900
          50: "#F0F9F4", // forest-green-50
          100: "#DCFCE7", // forest-green-100
          200: "#BBF7D0", // forest-green-200
          300: "#86EFAC", // forest-green-300
          400: "#4ADE80", // forest-green-400
          500: "#22C55E", // forest-green-500
          600: "#16A34A", // forest-green-600
          700: "#2D5A3D", // forest-green-700
          800: "#1B4332", // forest-green-800
          900: "#1B4332", // forest-green-900
          950: "#0F2419", // forest-green-950
          light: "#2D5A3D", // forest-green-700
          dark: "#0F2419", // forest-green-950
        },
        
        // Secondary Colors
        secondary: {
          DEFAULT: "#2D5A3D", // forest-green-700
          light: "#40916C", // forest-green-600
          dark: "#1B4332", // forest-green-900
        },
        
        // Accent Colors
        accent: {
          DEFAULT: "#FFD60A", // yellow-400
          50: "#FEFCE8", // yellow-50
          100: "#FEF3C7", // yellow-100
          200: "#FDE68A", // yellow-200
          300: "#FDE047", // yellow-300
          400: "#FFD60A", // yellow-400
          500: "#EAB308", // yellow-500
          600: "#CA8A04", // yellow-600
          700: "#A16207", // yellow-700
          800: "#854D0E", // yellow-800
          900: "#713F12", // yellow-900
          light: "#FDE047", // yellow-300
          dark: "#EAB308", // yellow-500
        },
        
        // Background Colors
        background: "#FEFEFE", // white
        surface: {
          DEFAULT: "#F8F9FA", // gray-50
          light: "#FFFFFF", // white
          dark: "#F1F5F9", // slate-100
        },
        
        // Text Colors
        text: {
          primary: "#1A1A1A", // gray-900
          secondary: "#4A5568", // gray-600
          muted: "#6B7280", // gray-500
          light: "#9CA3AF", // gray-400
        },
        
        // Status Colors
        success: {
          DEFAULT: "#22C55E", // green-500
          light: "#4ADE80", // green-400
          dark: "#16A34A", // green-600
        },
        warning: {
          DEFAULT: "#F59E0B", // amber-500
          light: "#FBBF24", // amber-400
          dark: "#D97706", // amber-600
        },
        error: {
          DEFAULT: "#EF4444", // red-500
          light: "#F87171", // red-400
          dark: "#DC2626", // red-600
        },
        
        // Border Colors
        border: {
          DEFAULT: "#E5E7EB", // gray-200
          light: "#F3F4F6", // gray-100
          dark: "#D1D5DB", // gray-300
        },
      },
      
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        arabic: ['Amiri', 'serif'],
        amiri: ['Amiri', 'serif'],
      },
      
      fontSize: {
        'hero': ['3.5rem', { lineHeight: '1.1', fontWeight: '800' }],
        'heading-1': ['2.5rem', { lineHeight: '1.2', fontWeight: '700' }],
        'heading-2': ['2rem', { lineHeight: '1.2', fontWeight: '700' }],
        'heading-3': ['1.5rem', { lineHeight: '1.3', fontWeight: '600' }],
        'body-lg': ['1.125rem', { lineHeight: '1.6', fontWeight: '400' }],
        'body': ['1rem', { lineHeight: '1.6', fontWeight: '400' }],
        'body-sm': ['0.875rem', { lineHeight: '1.5', fontWeight: '400' }],
        'cta': ['1rem', { lineHeight: '1.4', fontWeight: '600' }],
      },
      
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      
      boxShadow: {
        'cta': '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
        'testimonial': '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
        'card': '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        'card-hover': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      },
      
      borderWidth: {
        '3': '3px',
      },
      
      transitionDuration: {
        '250': '250ms',
      },
      
      transitionTimingFunction: {
        'ease-in-out': 'ease-in-out',
      },
      
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-in-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
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
      },
      
      backgroundImage: {
        'islamic-pattern': "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231B4332' fill-opacity='0.05'%3E%3Cpath d='M30 30c0-16.569 13.431-30 30-30v60c-16.569 0-30-13.431-30-30z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
        'gradient-primary': 'linear-gradient(135deg, #1B4332, #2D5A3D)',
        'gradient-accent': 'linear-gradient(135deg, #FFD60A, #EAB308)',
      },
    },
  },
  plugins: [],
}