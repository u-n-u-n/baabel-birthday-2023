import styled from 'styled-components'

export const Wrapper = styled.div`
    background: #FFFFFF;
    border-radius: 16px;
    height: fit-content !important;
    box-shadow: 0px 4px 20px 0px rgba(248, 203, 203, 0.4);
    padding: 12px 16px 16px 16px;
`

export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 8px;
`

export const Sender = styled.div`
    display: flex;
    align-items: center;
`

export const BaabaeMini = styled.img`
    width: 32px;
    margin-right: 8px;
`

export const Title = styled.div`
   color: ${props => props.color};
   font-size: 20px;
   line-height: 27px;
`

export const Gift = styled.img`
    width: 24px;
`

export const Description = styled.div`
   color: #2D2D2D;
   font-size: 16px;
   line-height: 24px;
   letter-spacing: 0.8px;
   margin-bottom: 4px;
`

export const DateAndTime = styled.div.attrs({
    className: 'eclair-font'
})`
    color: #A4A4A4;
    font-size: 12px;
    font-weight: 300;
    line-height: 17px;
    display: flex;
    justify-content: space-between;
`