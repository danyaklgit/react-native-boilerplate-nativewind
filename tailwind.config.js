/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: { 
      colors: {
        primary: "#70A0AF",
        secondary: "#706993",
        tertiary: "#F4E8C1",
        quaternary: "#331E38",
        quinary: "#A0C1B9",
      },
    },
  },
  plugins: [],
}