import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

export default {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			primary: {
  				'10': 'var(--primary-10)',
  				'20': 'var(--primary-20)',
  				'30': 'var(--primary-30)',
  				'40': 'var(--primary-40)',
  				'50': 'var(--primary-50)',
  				'60': 'var(--primary-60)',
  				'70': 'var(--primary-70)',
  				'80': 'var(--primary-80)',
  				'90': 'var(--primary-90)',
  				'100': 'var(--primary-100)',
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))',
  				base: 'var(--primary-base)'
  			},
  			neutral: {
  				'0': 'var(--neutral-0)',
  				'10': 'var(--neutral-10)',
  				'20': 'var(--neutral-20)',
  				'30': 'var(--neutral-30)',
  				'40': 'var(--neutral-40)',
  				'50': 'var(--neutral-50)',
  				'60': 'var(--neutral-60)',
  				'70': 'var(--neutral-70)',
  				'80': 'var(--neutral-80)',
  				'90': 'var(--neutral-90)',
  				'100': 'var(--neutral-100)',
  				base: 'var(--neutral-base)'
  			},
  			success: {
  				'10': 'var(--success-10)',
  				'20': 'var(--success-20)',
  				'30': 'var(--success-30)',
  				'40': 'var(--success-40)',
  				'50': 'var(--success-50)',
  				'60': 'var(--success-60)',
  				'70': 'var(--success-70)',
  				'80': 'var(--success-80)',
  				'90': 'var(--success-90)',
  				'100': 'var(--success-100)',
  				base: 'var(--success-base)'
  			},
  			error: {
  				'10': 'var(--error-10)',
  				'20': 'var(--error-20)',
  				'30': 'var(--error-30)',
  				'40': 'var(--error-40)',
  				'50': 'var(--error-50)',
  				'60': 'var(--error-60)',
  				'70': 'var(--error-70)',
  				'80': 'var(--error-80)',
  				'90': 'var(--error-90)',
  				'100': 'var(--error-100)',
  				base: 'var(--error-base)'
  			},
  			warning: {
  				'10': 'var(--warning-10)',
  				'20': 'var(--warning-20)',
  				'30': 'var(--warning-30)',
  				'40': 'var(--warning-40)',
  				'50': 'var(--warning-50)',
  				'60': 'var(--warning-60)',
  				'70': 'var(--warning-70)',
  				'80': 'var(--warning-80)',
  				'90': 'var(--warning-90)',
  				'100': 'var(--warning-100)',
  				base: 'var(--warning-base)'
  			},
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
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
  plugins: [tailwindcssAnimate],
} satisfies Config;
