import styled from 'styled-components'

import Button from '../../components/Button'

interface WrapperProps {
  color: string
}

interface TitleProps {
  color: string
}

interface GiftTitleProps {
  color: string
}

interface BoxProps {
  selected: boolean
  selectedBorderColor: string
  selectedBackgroundColor: string
}

interface BackButtonProps {
  color: string
  hoverColor: string
}

interface ConfirmButtonProps {
  color: [string, string]
}

export const Wrapper = styled.div<WrapperProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background: linear-gradient(
    180deg,
    ${(props) => props.color} 0%,
    white 50%,
    white 100%
  );
  min-height: 100vh;
  padding: 48px 24px;

  & > div {
    width: 100%;
  }
`

export const Title = styled.div.attrs({
  className: 'eclair-font',
})<TitleProps>`
  color: ${(props) => props.color};
  font-size: 32px;
  line-height: 46px;

  ${({ theme }) => theme.breakpoints.down('sm')} {
    font-size: 24px;
    line-height: 35px;
  }
`

export const MainGift = styled.img`
  width: 160px;
  margin: 24px 0;

  ${({ theme }) => theme.breakpoints.down('sm')} {
    margin: 16px 0;
  }
`

export const GiftHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 0px;
  gap: 8px;
`

export const MiniGift = styled.img`
  width: 20px;
`

export const GiftTitle = styled.div.attrs({
  className: 'eclair-font',
})<GiftTitleProps>`
  font-size: 20px;
  line-height: 29px;
  color: ${(props) => props.color};
`

export const GiftDescription = styled.div.attrs({
  className: 'eclair-font',
})`
  font-size: 16px;
  line-height: 23px;
  font-weight: 300;
  white-space: pre-line;
  color: #2d2d2d;
  margin-top: 8px;

  ${({ theme }) => theme.breakpoints.down('sm')} {
    font-size: 14px;
  }
`

export const BoxList = styled.div`
  display: grid;
  column-gap: 16px;
  grid-template-columns: repeat(9, 1fr);
  max-width: 992px;
  margin: 32px auto 40px;

  ${({ theme }) => theme.breakpoints.down('lg')} {
    display: grid;
    column-gap: 16px;
    row-gap: 16px;
    grid-template-columns: repeat(3, 1fr);
    max-width: 320px;
    margin: 24px auto;
  }
`

export const Box = styled.div<BoxProps>`
  background-color: ${(props) =>
    props.selected ? props.selectedBackgroundColor : 'white'};
  border-radius: 8px;
  border: ${(props) => (props.selected ? 2 : 1)}px solid
    ${(props) => (props.selected ? props.selectedBorderColor : '#eaeaea')};
  padding: 12px 16px;
  cursor: pointer;

  &:hover {
    background: ${(props) => `${props.selectedBackgroundColor}CC`};
  }
`

export const ButtonWrapper = styled.div`
  max-width: 500px;
  display: flex;
  flex-direction: row;
  gap: 12px;
  margin: auto;

  ${({ theme }) => theme.breakpoints.down('lg')} {
    max-width: 320px;
  }
`

export const BackButton = styled(Button)<BackButtonProps>`
  width: 100%;
  margin: auto;
  border: 1px solid ${(props) => props.color};
  background: white;

  & > div {
    color: ${(props) => props.color};
  }

  &:hover {
    background: ${(props) => props.hoverColor};
  }
`

export const ConfirmButton = styled(Button)<ConfirmButtonProps>`
  width: 100%;
  margin: auto;
  background: linear-gradient(
    90deg,
    ${(props) => props.color[0]} 0%,
    ${(props) => props.color[1]} 100%
  );

  &:hover {
    background: ${(props) => props.color[0]};
  }
`

export const Gift = styled.img`
  width: 100%;
  margin-bottom: 8px;
`

export const GiftName = styled.div.attrs({
  className: 'eclair-font',
})`
  font-size: 16px;
  line-height: 23px;
  font-weight: 300;
  color: #2d2d2d;
`
