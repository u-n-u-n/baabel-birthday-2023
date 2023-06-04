import { useTheme } from 'styled-components'
import { useMediaQuery } from 'styled-breakpoints/use-media-query'

import {
  Wrapper,
  TextWrapper,
  HbdText,
  BaabelText,
  ImagesWrapper,
  BaabelImage,
  BaabaeImage1,
  BaabaeImage2,
  BaabaeImage3,
  BaabaeImage4,
  BaabaeImage5,
  BaabaeImage6,
  BaabaeImage7,
  BaabaeImage8,
  BaabaeImage10,
} from './styled'

const Header = () => {
  const theme = useTheme()
  const isMd = useMediaQuery(theme!.breakpoints.down('md'))
  const isSm = useMediaQuery(theme!.breakpoints.down('sm'))

  return (
    <Wrapper>
      <div>
        <TextWrapper>
          <HbdText
            src={
              isSm
                ? './assets/images/header_hbd_text_sm.png'
                : './assets/images/header_hbd_text.png'
            }
          />
          <BaabelText src='./assets/images/header_baabel_text.png' />
        </TextWrapper>
        <ImagesWrapper>
          <BaabaeImage8 src='./assets/images/header_baabae_8.png' />
          <BaabelImage
            src={
              isMd
                ? './assets/images/header_baabel_md.png'
                : './assets/images/header_baabel.png'
            }
          />
          <BaabaeImage3 src='./assets/images/header_baabae_3.png' />
          <BaabaeImage6 src='./assets/images/header_baabae_6.png' />
          <BaabaeImage4 src='./assets/images/header_baabae_4.png' />
          <BaabaeImage7 src='./assets/images/header_baabae_7.png' />
          <BaabaeImage5 src='./assets/images/header_baabae_5.png' />
          <BaabaeImage10 src='./assets/images/header_baabae_10.png' />
          <BaabaeImage1 src='./assets/images/header_baabae_1.png' />
          <BaabaeImage2 src='./assets/images/header_baabae_2.png' />
        </ImagesWrapper>
      </div>
    </Wrapper>
  )
}

export default Header
