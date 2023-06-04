import styled, { keyframes } from 'styled-components'

const baabaeImage1Keyframes = keyframes`
  0%   { top: 436px; }
  50%  { top: 436px; }
  75%  { top: 410px; }
  100% { top: 436px; }
`

const baabaeImage2Keyframes = keyframes`
  0%   { left: 186px; }
  50%  { left: 195px; }
  100% { left: 186px; }
`

const baabaeImage7Keyframes = keyframes`
  0%   { transform: rotate(-1deg); }
  50%  { transform: rotate(1deg); }
  100% { transform: rotate(-1deg); }
`

const baabaeImage8Keyframes = keyframes`
  0%   { top: 188px; left: 872px; }
  50%  { top: 190px; left: 870px; }
  100% { top: 188px; left: 872px; }
`

const baabaeImage10Keyframes = keyframes`
  0%   { transform: rotate(-2deg); }
  50%  { transform: rotate(2deg); }
  100% { transform: rotate(-2deg); }
`

export const Wrapper = styled.div`
  width: 100%;
  background-image: url(./assets/images/header_background.png);
  background-position-x: center;
  background-repeat: repeat no-repeat;
  margin-bottom: -160px;
  overflow: hidden;

  & > div {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    top: -75px;
    margin-left: 210px;
  }

  ${({ theme }) => theme.breakpoints.only('md')} {
    zoom: 0.78;
  }

  ${({ theme }) => theme.breakpoints.down('md')} {
    margin-bottom: -130px;

    & > div {
      flex-direction: column;
      margin-left: 0;
      top: -50px;
    }
  }

  ${({ theme }) => theme.breakpoints.down('sm')} {
    margin-bottom: -90px;

    & > div {
      top: -30px;
    }
  }
`

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  position: relative;
  top: 20px;

  ${({ theme }) => theme.breakpoints.down('md')} {
    position: absolute;
    zoom: 0.6;
    top: 180px;
    left: calc(50% - 330px);
    transform: rotate(-5deg);
  }

  ${({ theme }) => theme.breakpoints.down('sm')} {
    zoom: 0.45;
    top: 160px;
    left: calc(50% - 300px);
  }
`

export const HbdText = styled.img`
  width: 500px;
`

export const BaabelText = styled.img`
  width: 350px;
`

export const ImagesWrapper = styled.div`
  position: relative;
  right: 350px;
  zoom: 0.5;

  ${({ theme }) => theme.breakpoints.down('md')} {
    right: 10px;
  }

  ${({ theme }) => theme.breakpoints.down('sm')} {
    zoom: 0.35;
    right: 30px;
  }
`

export const BaabelImage = styled.img`
  position: relative;
`

export const BaabaeImage = styled.img`
  position: absolute;
`

export const BaabaeImage1 = styled(BaabaeImage)`
  animation: ${baabaeImage1Keyframes} 2s ease-in-out infinite;
  top: 436px;
  left: 262px;
`

export const BaabaeImage2 = styled(BaabaeImage)`
  animation: ${baabaeImage2Keyframes} 2s ease-in-out infinite;
  top: 528px;
  left: 186px;
`

export const BaabaeImage3 = styled(BaabaeImage)`
  top: 352px;
  left: 448px;
`

export const BaabaeImage4 = styled(BaabaeImage)`
  top: 478px;
  left: 440px;
`

export const BaabaeImage5 = styled(BaabaeImage)`
  top: 562px;
  left: 380px;
`

export const BaabaeImage6 = styled(BaabaeImage)`
  top: 376px;
  left: 622px;
`

export const BaabaeImage7 = styled(BaabaeImage)`
  animation: ${baabaeImage7Keyframes} 2s ease-in-out infinite;
  transform-origin: bottom left;
  top: 524px;
  left: 600px;
`

export const BaabaeImage8 = styled(BaabaeImage)`
  animation: ${baabaeImage8Keyframes} 2s ease-in-out infinite;
  top: 188px;
  left: 872px;
`

export const BaabaeImage10 = styled(BaabaeImage)`
  animation: ${baabaeImage10Keyframes} 2s ease-in-out infinite;
  transform-origin: bottom right;
  top: 492px;
  left: 966px;
`
