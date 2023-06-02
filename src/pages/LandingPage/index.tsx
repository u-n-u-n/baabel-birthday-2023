import { useTheme } from 'styled-components'
import { useMediaQuery } from 'styled-breakpoints/use-media-query'

import { useDatabaseContext } from '../../contexts/database'
import { GIFT_CONFIG } from '../../configs'

import Tag from './components/Tag'
import Card from './components/Card'
import {
  Wrapper,
  Header,
  TagList,
  CardList,
  ButtonWrapper,
  StyledButton,
} from './styled'

interface LandingPageProps {
  setPage: (page: string) => void
}

const LandingPage = ({ setPage }: LandingPageProps) => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme!.breakpoints.down('sm'))
  const isTablet = useMediaQuery(theme!.breakpoints.between('sm', 'lg'))
  const { stats, wishes } = useDatabaseContext()

  return (
    <Wrapper>
      <Header />
      <TagList>
        {Object.keys(GIFT_CONFIG)
          .sort(
            (a, b) =>
              (stats[b as keyof typeof GIFT_CONFIG]?.amount ?? 0) -
              (stats[a as keyof typeof GIFT_CONFIG]?.amount ?? 0)
          )
          .map((gift) => (
            <Tag
              key={`${gift}-stat`}
              gift={gift as keyof typeof GIFT_CONFIG}
              amount={stats[gift as keyof typeof GIFT_CONFIG]?.amount ?? 0}
            />
          ))}
      </TagList>
      <CardList
        minWidth={80}
        colCount={isMobile ? 1 : isTablet ? 2 : 3}
        items={wishes.map((wish) => (
          <Card key={wish.id} {...wish} />
        ))}
      />
      <ButtonWrapper>
        <StyledButton icon='plus' onClick={() => setPage('giftPage')}>
          เขียนคำอวยพร
        </StyledButton>
      </ButtonWrapper>
    </Wrapper>
  )
}

export default LandingPage
