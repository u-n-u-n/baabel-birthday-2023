import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  @font-face {
    src: url('./assets/fonts/MN Luk Chup Bold.ttf') format('truetype');
    font-family: 'MN Luk Chup';
    font-weight: 700;
    font-style: normal;
  }
  
  @font-face {
    src: url('./assets/fonts/MN ECLAIR.ttf') format('truetype');
    font-family: 'MN ECLAIR';
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    src: url('./assets/fonts/MN ECLAIR Light.ttf') format('truetype');
    font-family: 'MN ECLAIR';
    font-weight: 300;
    font-style: normal;
  }

  @font-face {
    src: url('./assets/fonts/MN ECLAIR Bold.ttf') format('truetype');
    font-family: 'MN ECLAIR';
    font-weight: 700;
    font-style: normal;
  }

  * {
    box-sizing: border-box;
  }

  body {
    font-family: 'MN Luk Chup', sans-serif;
    margin: 0;
  }

  .eclair-font {
    font-family: 'MN ECLAIR', sans-serif;
  }
`

export default GlobalStyle
