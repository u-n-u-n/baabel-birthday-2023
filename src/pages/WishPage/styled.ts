import styled, { css } from 'styled-components'

import Button from '../../../src/components/Button'

interface WrapperProps {
  color: string
}

interface TitleProps {
  color: string
}

interface FormFieldProps {
  color: string
  shadowColor: string
}

interface CharacterLimitProps {
  color: string
}

interface BackButtonProps {
  color: string
  hoverColor: string
}

interface ConfirmButtonProps {
  color: [string, string]
}

const getFormFieldStyles = (props: FormFieldProps) => css`
  font-family: 'MN Luk Chup' !important;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: 0.8px;
  color: #2d2d2d;
  caret-color: ${props.color};
  background: white;
  border: 2px solid ${props.color};
  box-shadow: 0px 4px 20px ${`${props.shadowColor}7F`};
  border-radius: 16px;
  outline: none;
  padding: 16px 24px;

  &::placeholder {
    color: ${props.color};
  }

  ${({ theme }) => theme.breakpoints.down('sm')} {
    font-size: 16px;
    line-height: 23px;
  }
`

export const Wrapper = styled.div<WrapperProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
    180deg,
    ${(props) => props.color} 0%,
    white 50%,
    white 100%
  );
  min-height: 100vh;
  padding: 48px;

  & > div {
    width: 100%;
    text-align: center;
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

export const Baabae = styled.img`
  width: 230px;
  margin-top: 24px;
  margin-bottom: -54px;
`

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 500px;
  margin: 0 auto;
`

export const SenderName = styled.input<FormFieldProps>`
  ${(props) => getFormFieldStyles(props)}
  height: 55px;
  margin-bottom: 16px;
`

export const WishBox = styled.textarea<FormFieldProps>`
  ${(props) => getFormFieldStyles(props)}
  height: 200px;
  margin-bottom: 12px;
  resize: none;
`

export const CharacterLimit = styled.div.attrs({
  className: 'eclair-font',
})<CharacterLimitProps>`
  color: ${(props) => props.color};
  font-size: 12px;
  line-height: 17px;
  text-align: center;
  margin-bottom: 32px;
`

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
  width: 100%;
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
