/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'media',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      /* backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      }, */
      fontFamily: {
        heading: ["var(--font-stix)"],
        body: ["var(--font-indie)"],
        accent: ["var(--font-audiowide)"],
        accent2: ["var(--font-lilita)"],
        pixel: ["var(--font-vt323)"],
        pixel2: ["var(--font-press)"],
      },
      colors: {
        p: {
          1: "#323353",
          2: "#484a77",
          3: "#4d65b4",
          4: "#4d9be6",
          5: "#8fd3ff",
        },
        s: {
          1: "#7a3045",
          2: "#9e4539",
          3: "#fb6b1d",
          4: "#e6904e",
          5: "#fbb954",
        },
        a: {
          1: "#ae2334",
          2: "#d23f4d",
          3: "#e85a66",
          4: "#f4757f",
          5: "#ff9099",
        }
      },
    },
    plugins: [
    ],
  }
}
