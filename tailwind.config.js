/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js",   // 👉 ADD THIS
  ],
  theme: {
    extend: {
      keyframes: {
        zoom: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.2)' },
        },
      },
      animation: {
        'zoom-slow': 'zoom 3s ease-in-out infinite',
      },
    },
  },
  plugins: [
    require('flowbite/plugin')           // 👉 ADD THIS
  ],
}




