module.exports = {
  content: ["./pages/*.{html,js}", "./index.html"],
  theme: {
    extend: {
      colors: {
        // Primary Colors
        primary: "#1A1A1A", // Deep charcoal base
        secondary: "#2D2D2D", // Elevated surface color
        accent: "#E65400", // High-energy orange
        
        // Background Colors
        background: "#0F0F0F", // True dark background
        surface: "#242424", // Card and component background
        
        // Text Colors
        'text-primary': "#FFFFFF", // Pure white
        'text-secondary': "#B0B0B0", // Muted gray
        
        // Status Colors
        success: "#4CAF50", // Confirmation green - green-500
        warning: "#FF9800", // Amber warning - amber-600
        error: "#F44336", // Clear red error - red-500
        
        // Extended Orange Palette
        orange: {
          400: "#FF7043", // Lighter orange accent
          500: "#E65400", // Primary orange
          600: "#D84315", // Darker orange hover
        },
        
        // Extended Gray Palette
        gray: {
          50: "#FAFAFA", // Lightest gray
          100: "#F5F5F5", // Very light gray
          200: "#EEEEEE", // Light gray
          300: "#E0E0E0", // Medium light gray
          400: "#BDBDBD", // Medium gray
          500: "#9E9E9E", // Base gray
          600: "#757575", // Medium dark gray
          700: "#616161", // Dark gray
          800: "#424242", // Very dark gray
          900: "#212121", // Darkest gray
        },
        
        // Border Color
        border: "rgba(255, 255, 255, 0.1)", // Minimal borders
      },
      fontFamily: {
        // Headings - Angular, athletic letterforms
        'rajdhani': ['Rajdhani', 'sans-serif'],
        // Body - Contemporary sans-serif optimized for screen reading
        'inter': ['Inter', 'sans-serif'],
        // Captions - Efficient, compact letterforms
        'roboto-condensed': ['Roboto Condensed', 'sans-serif'],
        // Data - Monospace for perfect alignment
        'jetbrains-mono': ['JetBrains Mono', 'monospace'],
        // Default sans
        sans: ['Inter', 'sans-serif'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
      },
      boxShadow: {
        'card': '0 4px 12px rgba(0, 0, 0, 0.4)',
        'button': '0 2px 8px rgba(0, 0, 0, 0.3)',
        'glow': '0 0 20px rgba(230, 84, 0, 0.3)',
        'elevated': '0 8px 24px rgba(0, 0, 0, 0.5)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'loading': 'loading 1.5s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': {
            opacity: '0',
            transform: 'translateY(10px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        loading: {
          '0%': {
            'background-position': '200% 0',
          },
          '100%': {
            'background-position': '-200% 0',
          },
        },
      },
      transitionTimingFunction: {
        'custom': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      transitionDuration: {
        '150': '150ms',
        '200': '200ms',
      },
      backdropBlur: {
        'xs': '2px',
        'sm': '4px',
        'md': '8px',
        'lg': '12px',
        'xl': '16px',
      },
    },
  },
  plugins: [],
}