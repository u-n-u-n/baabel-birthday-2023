import styled from 'styled-components'
import ReactMasonryList from 'react-masonry-list'

import background from '../../assets/images/background.png'

export const Wrapper = styled.div`
  min-height: 100vh;
  background-image: url(${background});
  background-position-x: center;
`

export const Header = styled.div `
  height: 350px;
  background-color: #F8CBCB;
`

export const CardList = styled(ReactMasonryList)`
  max-width: 1146px;
  column-gap: 24px !important;
  row-gap: 10.5px !important;
  margin: auto;
  padding: 32px 0;

  & > div {
    height: fit-content;
  }
`
