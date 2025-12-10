/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js",   // 👉 ADD THIS
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')           // 👉 ADD THIS
  ],
}
