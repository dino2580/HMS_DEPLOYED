/** @type {import('tailwindcss').Config}*/
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        face: '#fb7e73',
        testimonial:'#3f3d56'
      },
    },
    keyframes: {
      wiggle: {
        '0%': { transform: 'rotate(-2deg)' },
        '50%': { transform: 'rotate(2deg)' },
        '100%': { transform: 'rotate(-2deg)' },
      },

    }
  },
  plugins: [

  ],
}

