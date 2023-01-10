// tailwind.config.js
module.exports = {
  style: {
    postcss: {
      plugins: [require("tailwindcss"), require("autoprefixer")],
    },
  },
  jit: false,
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        dod: {
          100: '#C6E1FF',
          300: '#3B82F6',
          500: '#083DF8',
          700: '#083DA3',
          900: '#083DF8',
        },
      },
    },
    plugins: [],
  },
};
