import styled from 'styled-components'
import ReactMasonryList from 'react-masonry-list'

import background from '../../assets/images/background.png'

export const Wrapper = styled.div`
  min-height: 100vh;
  background-image: url(${background});
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
  gap: 12px;
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
  padding: 0 24px 32px;

  & > div {
    height: fit-content;
  }

  ${({ theme }) => theme.breakpoints.down('sm')} {
    row-gap: 10px !important;
  }
`
