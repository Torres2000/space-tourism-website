import type { Config } from "tailwindcss";

const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",

  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        homeDesktop: "url('../img/home/background-home-desktop.jpg')",
        homeTablet: "url('../img/home/background-home-tablet.jpg')",
        homeMobile: "url('../img/home/background-home-mobile.jpg')",
        crewDesktop: "url('../img/crew/background-crew-desktop.jpg')",
        crewTablet: "url('../img/crew/background-crew-tablet.jpg')",
        crewMobile: "url('../img/crew/background-crew-mobile.jpg')",
        destinationDesktop:
          "url('../img/destination/background-destination-desktop.jpg')",
        destinationTablet:
          "url('../img/destination/background-destination-tablet.jpg')",
        destinationMobile:
          "url('../img/destination/background-destination-mobile.jpg')",
        technologyDesktop:
          "url('../img/technology/background-technology-desktop.jpg')",
        technologyTablet:
          "url('../img/technology/background-technology-tablet.jpg')",
        technologyMobile:
          "url('../img/technology/background-technology-mobile.jpg')",
      },
    },
    animation: {
      shimmer: "shimmer 2s linear infinite",
    },
    keyframes: {
      shimmer: {
        from: {
          backgroundPosition: "0 0",
        },
        to: {
          backgroundPosition: "-200% 0",
        },
      },
    },
  },
  plugins: [addVariablesForColors],
};
// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}
export default config;
