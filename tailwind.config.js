module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '2rem',
        sm: '2rem',
        lg: '4.5rem',
      }
    },
    extend: {
      colors: {
        primary: "#052F5F",
        info: "#5465FF",
        success: "#22C55E",
        danger: "#EF4444"
      }
    },
  },
  plugins: [],
}
