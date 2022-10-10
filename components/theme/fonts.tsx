import { Global } from '@emotion/react'

export const FontsGlobal = () => (
  <Global
    styles={`
      @font-face {
        font-family: 'Cascadia';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url('/assets/fonts/SFProDisplay.woff2') format('woff2'),
            url('/assets/fonts/SFProDisplay.woff') format('woff');
      }
    `}
  />
)
