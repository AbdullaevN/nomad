module.exports = {
    content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
    theme: {
      container: {
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem'
        }
      }
    },
    plugins: [
      require('tailwind-scrollbar-hide')
    ]
  };
  