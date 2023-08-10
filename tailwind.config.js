/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "principal-font": ["Lato", "sans-serif"]
      },
      
      backgroundImage: {
        "weather": "url('/images/Bgweather.svg')",
        "back": "url('/images/weather-realistic.png')",
        "loader1":"url('/images/loader1.png')",
        "loader2":"url('/images/loader2.png')",
      },

      keyframes: {
        progressBar:{
          '0%': { width: '0%' },
        '100%': { width: '88%' },
        }
      },

      animation: {
        progressBar: 'progressBar 2s linear',
      }
    },
  },
  plugins: [],
}

