import { ThemeProvider } from 'styled-components'
import { createStyledBreakpointsTheme } from 'styled-breakpoints'

import GlobalStyle from './globalStyle'
import LandingPage from './pages/LandingPage'

const theme = createStyledBreakpointsTheme()

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <LandingPage />
    </ThemeProvider>
  )
}

export default App
