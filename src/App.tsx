import { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { createStyledBreakpointsTheme } from 'styled-breakpoints'

import GlobalStyle from './globalStyle'
import LandingPage from './pages/LandingPage'
import GiftPage from './pages/GiftPage'
import WishPage from './pages/WishPage'
import { GIFT_CONFIG } from './configs'
import { DatabaseProvider } from './contexts/database'

const theme = createStyledBreakpointsTheme()

const App = () => {
  const [page, setPage] = useState('landingPage')
  const [selectedGift, setSelectedGift] =
    useState<keyof typeof GIFT_CONFIG>('salad')

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <DatabaseProvider>
        {page === 'landingPage' ? (
          <LandingPage setPage={setPage} />
        ) : page === 'giftPage' ? (
          <GiftPage
            selectedGift={selectedGift}
            setSelectedGift={setSelectedGift}
            setPage={setPage}
          />
        ) : page === 'wishPage' ? (
          <WishPage selectedGift={selectedGift} setPage={setPage} />
        ) : null}
      </DatabaseProvider>
    </ThemeProvider>
  )
}

export default App
