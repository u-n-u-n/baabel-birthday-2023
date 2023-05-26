import { ThemeProvider } from 'styled-components'
import { createStyledBreakpointsTheme } from 'styled-breakpoints'

import GlobalStyle from './globalStyle'
import LandingPage from './pages/LandingPage'
import GiftPage from './pages/GiftPage'

const theme = createStyledBreakpointsTheme()

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {/* <LandingPage /> */}
      <GiftPage gift='salad' />
    </ThemeProvider>
  )
}

export default App
