import styled from 'styled-components'
import ReactMasonryList from 'react-masonry-list'

import Button from '../../components/Button'

export const Wrapper = styled.div`
  min-height: 100vh;
  background-image: url(./assets/images/background.png);
  background-position-x: center;
`

export const Header = styled.div`
  height: 350px;
  background-color: #f8cbcb;
  margin-bottom: 32px;

  ${({ theme }) => theme.breakpoints.down('sm')} {
    margin-bottom: 16px;
  }
`

export const TagList = styled.div`
  width: fit-content;
  max-width: 100%;
  display: flex;
  align-items: center;
  margin: 0 auto 32px;
  gap: 4px;
  padding: 4px 28px;
  overflow-x: scroll;

  ${({ theme }) => theme.breakpoints.down('sm')} {
    margin-bottom: 16px;
  }
`

export const CardList = styled(ReactMasonryList)`
  max-width: 1194px;
  column-gap: 24px !important;
  row-gap: 10.5px !important;
  margin: auto;
  padding: 0 24px;

  & > div {
    height: fit-content;
  }

  ${({ theme }) => theme.breakpoints.down('sm')} {
    row-gap: 10px !important;
  }
`

export const ButtonWrapper = styled.div`
  max-width: 250px;
  padding: 16px 0 32px;
  margin: auto;
  position: sticky;
  bottom: 0;
`

export const StyledButton = styled(Button)`
  box-shadow: 4px 4px 20px 10px rgba(246, 160, 160, 0.3);
`
