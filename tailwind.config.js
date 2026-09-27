/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'ce-bg': "hsl(var(--color-background))",
        'ce-surface': "hsl(var(--color-surface))",
        'ce-surface-elevated': "hsl(var(--color-surface-elevated))",
        'ce-surface-subtle': "hsl(var(--color-surface-subtle))",
        'ce-border': "hsl(var(--color-border))",
        'ce-border-strong': "hsl(var(--color-border-strong))",
        'ce-text-primary': "hsl(var(--color-text-primary))",
        'ce-text-secondary': "hsl(var(--color-text-secondary))",
        'ce-text-muted': "hsl(var(--color-text-muted))",
        'ce-brand': "hsl(var(--color-brand))",
        'ce-brand-hover': "hsl(var(--color-brand-hover))",
        'ce-brand-subtle': "hsl(var(--color-brand-subtle))",
        'ce-success': "hsl(var(--color-success))",
        'ce-warning': "hsl(var(--color-warning))",
        'ce-danger': "hsl(var(--color-danger))",
        'ce-info': "hsl(var(--color-info))",
        'ce-verification': "hsl(var(--color-verification))",
        'ce-integrity': "hsl(var(--color-integrity))",
        'ce-blockchain': "hsl(var(--color-blockchain))",
        'ce-off-chain': "hsl(var(--color-off-chain))",
        'ce-tampered': "hsl(var(--color-tampered))",
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'Menlo', 'Monaco', 'Courier New', 'monospace'],
      }
    },
  },
  plugins: [],
};
