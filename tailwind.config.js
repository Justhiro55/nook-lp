/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary - 深みのあるネイビー（箱庭の夜空）
        primary: {
          DEFAULT: '#2b3a55',
          light: '#3d5178',
          dark: '#1a2438',
        },
        // Accent - やわらかい空色（箱庭の昼空）
        accent: {
          DEFAULT: '#cfe8ff',
          light: '#e8f4ff',
          dark: '#a8d4f5',
        },
        // Warm - 温かみのあるアプリコット（夕焼け）
        warm: {
          DEFAULT: '#ffd9b3',
          light: '#fff0e0',
          dark: '#f5c18a',
        },
        // Earth - 大地の色（箱庭の地面）
        earth: {
          DEFAULT: '#c4a77d',
          light: '#e8dcc8',
          dark: '#9a7f54',
        },
        // Green - やわらかな緑（箱庭の草木）
        green: {
          DEFAULT: '#a8c9a6',
          light: '#d4e8d3',
          dark: '#7ba378',
        },
        // Background
        background: {
          DEFAULT: '#faf9f7',
          alt: '#f0ede8',
        },
        // Text
        text: {
          DEFAULT: '#2d2d2d',
          muted: '#6b6b6b',
          light: '#9a9a9a',
        },
      },
      fontFamily: {
        // 本文用 - 丸みのあるゴシック
        zen: ['"Zen Maru Gothic"', 'sans-serif'],
        // 見出し用 - 手書き風
        klee: ['"Klee One"', 'cursive'],
      },
      fontSize: {
        'display': ['4.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'heading': ['3rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'subheading': ['1.75rem', { lineHeight: '1.4' }],
      },
      borderRadius: {
        'blob': '60% 40% 30% 70% / 60% 30% 70% 40%',
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      boxShadow: {
        'soft': '0 4px 20px rgba(43, 58, 85, 0.08)',
        'lifted': '0 20px 40px rgba(43, 58, 85, 0.12)',
        'inner-soft': 'inset 0 2px 10px rgba(0, 0, 0, 0.05)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      backgroundImage: {
        'noise': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [],
}
