import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: fit-content;
  padding: 4px 16px 4px 12px;
  border-radius: 100px;
  outline: 4px solid rgba(255, 255, 255, 0.7);
  background-color: ${(props) => props.color};

  ${({ theme }) => theme.breakpoints.down('sm')} {
    padding: 4px 12px 4px 8px;
  }
`

export const Gift = styled.img`
  width: 32px;
  margin-right: 4px;

  ${({ theme }) => theme.breakpoints.down('sm')} {
    width: 24px;
  }
`

export const Amount = styled.div.attrs({
  className: 'eclair-font',
})`
  white-space: nowrap;
  color: #2d2d2d;
  font-size: 20px;
  font-weight: 300;
  line-height: 29px;

  ${({ theme }) => theme.breakpoints.down('sm')} {
    font-size: 16px;
    line-height: 23px;
  }
`
