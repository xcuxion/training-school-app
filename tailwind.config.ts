import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
	"./src/**/*.{html,js,ts,tsx}",
  ],
  theme: {
  	extend: {
		colors: {
			school: {
				primary: '#9D2292',
				light: '#FFF9FF',
				secondary: '#FFF0FE',
				neutral: '#f5f5f6'
			},
			primary: {
			  light: '#F0F4F8',
			  dark: '#1A1A2E'
			},
			secondary: {
			  light: '#D8E2EC',
			  dark: '#16213E'
			},
			accent: {
			  light: '#4A90E2',
			  dark: '#0F3460'
			},
			color: {
			  light: '#2D3748',
			  dark: '#E0E0E0'
			},
			success: {
			  light: '#48BB78',
			  dark: '#50C878'
			},
			error: {
			  light: '#E53E3E',
			  dark: '#DC143C'
			},
			border: {
			  light: '#CBD5E0',
			  dark: '#2D3748'
			},
			input: {
			  light: '#EDF2F7',
			  dark: '#2C3E50'
			},
			ring: {
				light: '#4A90E2',
				dark: '#0F3460'
		  },
		},
  		borderRadius: {
			xxl: '24px',
			xl: '16px',
  			lg: '12px',
  			md: '8px',
  			sm: '4px'
  		},
  		keyframes: {
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			}
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
