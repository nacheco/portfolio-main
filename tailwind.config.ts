import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			white: 'var(--white)',
  			lightPurple: 'var(--lightPurple)',
  			purple: 'var(--purple)', 
  			deepPurple: 'var(--deepPurple)',
  			dark: 'var(--dark)',
  			lightDark: 'var(--lightDark)',
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
		backgroundImage: {
			'main-gradient': 'linear-gradient(to right, #C353FF 0%, #FF5A46 50%, #FF9372 100%)',
		},
  	}
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
