module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "youcast-bg": "#18212B",
        "youcast-lightblue": "rgba(99,177,221,0.75)",
        "youcast-mediumblue": "#232F3E",
        "youcast-black": "#121921",
        "youcast-white": "#E3E5EB",
        "youcast-hover": "rgba(196, 196, 196, 0.07)",
        "youcast-lightgrey": "#A4AAB3",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
