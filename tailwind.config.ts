import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "c-01": "#7C5DFA",
        "c-02": "#9277FF",
        "c-03": "#1E2139",
        "c-04": "#252945",
        "c-05": "#DFE3FA",
        "c-06": "#888EB0",
        "c-07": "#7E88C3",
        "c-08": "#0C0E16",
        "c-09": "#EC5757",
        "c-10": "#9277FF",
        "c-11": "#F8F8FB",
        "c-12": "#141625",
      },
    },
  },
  plugins: [],
};
export default config;
