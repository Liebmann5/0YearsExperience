import type { Config } from 'tailwindcss'
import tailwindAnimate from 'tailwindcss-animate'

import typography from '@tailwindcss/typography'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        main: '#FD9745',
        mainAccent: '#fc7303', // not needed for shadcn components
        overlay: 'rgba(0,0,0,0.8)',

        // light mode
        bg: '#fff4e0',
        text: '#000',
        border: '#000',

        // dark mode
        darkBg: '#272933',
        darkText: '#eeefe9',
        darkBorder: '#000',
        secondaryBlack: '#212121', // opposite of plain white, not used pitch black because borders and box-shadows are that color
      },
      typography: (theme) => ({
        dark: {
          css: {
            color: theme('colors.darkText'),
            '[class~="lead"]': { color: theme('colors.darkText') },
            a: { color: theme('colors.mainAccent') },
            strong: { color: theme('colors.darkText') },
            'ol > li::before': { color: theme('colors.darkText') },
            'ul > li::before': { backgroundColor: theme('colors.darkText') },
            hr: { borderColor: theme('colors.darkText') },
            blockquote: {
              color: theme('colors.darkText'),
              borderLeftColor: theme('colors.darkText'),
            },
            h1: { color: theme('colors.darkText') },
            h2: { color: theme('colors.darkText') },
            h3: { color: theme('colors.darkText') },
            h4: { color: theme('colors.darkText') },
            code: { 
              color: theme('colors.darkText'), 
              backgroundColor: theme('colors.darkBg'), 
            },
            'a code': { color: theme('colors.darkText') },
            pre: {
              color: theme('colors.darkText'),
              backgroundColor: theme('colors.darkBg'),
            },
            thead: {
              color: theme('colors.darkText'),
              borderBottomColor: theme('colors.darkText'),
            },
            'tbody tr': { borderBottomColor: theme('colors.darkText') },
          },
        },
      }),
      borderRadius: {
        base: '5px',
      },
      boxShadow: {
        light: '4px 4px 0px 0px #000',
        dark: '4px 4px 0px 0px #000',
      },
      translate: {
        boxShadowX: '4px',
        boxShadowY: '4px',
        reverseBoxShadowX: '-4px',
        reverseBoxShadowY: '-4px',
      },
      fontWeight: {
        base: '500',
        heading: '700',
      },
      screens: {
        w450: { raw: '(max-width: 450px)' },
      },
    },
  },
  darkMode: 'class',
  plugins: [tailwindAnimate, typography],
}
export default config
