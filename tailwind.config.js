module.exports = {
  purge: {
      content: [
      "./src/**/*.html",
      "./src/**/*.js",
    ]
  },
  theme: {
    extend: {},
  },
  variants: {
    margin: [ 'responsive', 'direction' ],
  },
  plugins: [
    require("tailwindcss-dir")(),
  ],
}
