import { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { createStyledBreakpointsTheme } from 'styled-breakpoints'

import GlobalStyle from './globalStyle'
import LandingPage from './pages/LandingPage'
import GiftPage from './pages/GiftPage'
import WishPage from './pages/WishPage'

const theme = createStyledBreakpointsTheme()

const App = () => {
  const [page, setPage] = useState('landingPage')

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {page === 'landingPage' ? (
        <LandingPage setPage={setPage} />
      ) : page === 'giftPage' ? (
        <GiftPage selectedGift='salad' setPage={setPage} />
      ) : page === 'wishPage' ? (
        <WishPage />
      ) : null}
    </ThemeProvider>
  )
}

export default App
