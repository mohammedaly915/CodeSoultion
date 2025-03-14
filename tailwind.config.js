const plugin = require('tailwindcss/plugin');
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primeColor: "#111827",
        secondColor: "#1C68AA", 
      },
      backdropBlur: {
        lg: '20px',
      },
      backgroundImage:{
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      boxShadow: {
        'glow': '0 0 30px rgba(28, 104, 170, 0.2)',
      }

    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      const newUtilities = {
        '.bg-gradient': {
          backgroundImage: 'linear-gradient(to right, rgb(175, 196, 215), white)',
        },
      };
      addUtilities(newUtilities, ['responsive', 'hover']);
    }),
  ],
};
