import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        light: {
          1: "#fefefe",
          2: "#c1c6ce",
          3: "#f4f8fb",
          4: "#cecece",
          5: "#ffffff",
        },
        dark: {
          1: "#111315",
          2: "#1a1b21",
          3: "#2e2d34",
          4: "#4f4e5a",
          5: "#9290a6",
        },

        now: {
          1: "#17181D",
          2: "#292C35",
          3: "#E09145",
          4: "#FCD9B8",
          5: "#cebdb4",
        },

        onyx: {
          1: "#0C0C0F",
          2: "#18181A",
          3: "#29292B",
          4: "#38383A",
          5: "#4C4C4E",
        },

        raspberry: {
          1: "#42002E",
          2: "#590054",
          3: "#720137",
          4: "#5E0009",
          5: "#46000D",
        },

        static: {
          1: "#131313",
          2: "#252525",
          3: "#333333",
          4: "#3E3E3E",
          5: "#4A4A4A",
        },

        coffee: {
          1: "#0B0201",
          2: "#402315",
          3: "#522D17",
          4: "#603A28",
          5: "#48312B",
        },

        forestfloor: {
          1: "#292D3F",
          2: "#373F38",
          3: "#5F3920",
          4: "#4B3830",
          5: "#332521",
        },

        forestdawn: {
          1: "#192A3C",
          2: "#223546",
          3: "#245B47",
          4: "#224942",
          5: "#0D3A32",
        },

        wednesday: {
          1: "#444243",
          2: "#646263",
          3: "#121112",
          4: "#9B773D",
          5: "#615545",
        },

        navy: {
          1: "#030A1C",
          2: "#051024",
          3: "#061831",
          4: "#0B1C3E",
          5: "#11244A",
        },

        crystal: {
          1: "#001E1E",
          2: "#00312F",
          3: "#014848",
          4: "#005958",
          5: "#016764",
        },

        pahoehoe: {
          1: "#1D1E23",
          2: "#33363F",
          3: "#656772",
          4: "#57463A",
          5: "#2E2B26",
        },

        sunrise: {
          1: "#3A2B50",
          2: "#563457",
          3: "#38667E",
          4: "#1B435E",
          5: "#161638",
        },

        slate: {
          1: "#4E433B",
          2: "#74563B",
          3: "#9498A1",
          4: "#2D4459",
          5: "#122537",
        },

        emerald: {
          1: "#125607",
          2: "#074300",
          3: "#0C2703",
          4: "#071402",
          5: "#090804",
        },

        nightlife: {
          1: "#430E18",
          2: "#2A0A11",
          3: "#110E15",
          4: "#211720",
          5: "#411D2B",
        },

        emma: {
          1: "#936D58",
          2: "#5B4A40",
          3: "#2B2628",
          4: "#493F3D",
          5: "#775E59",
        },
        walking: {
          1: "#597276",
          2: "#2B3C43",
          3: "#0E191F",
          4: "#423A37",
          5: "#7B6D62",
        },
        forest: {
          1: "#0E161B",
          2: "#162022",
          3: "#232E30",
          4: "#314048",
          5: "#56666F",
        },

        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
