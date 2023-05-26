import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
    90deg,
    rgb(245, 157, 157) 0%,
    rgb(255, 186, 186) 100%
  );
  border-radius: 100px;
  padding: 8px 0;
  cursor: pointer;

  &:hover {
    background: #fc8c8c;
  }
`

export const Icon = styled.img`
  margin-right: 8px;
`

export const Text = styled.div.attrs({
  className: 'eclair-font',
})`
  font-size: 16px;
  color: #ffffff;
`
