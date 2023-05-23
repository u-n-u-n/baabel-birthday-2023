import { GIFT_CONFIG } from '../../../../configs'
import { Wrapper, Gift, Amount } from './styled'

interface TagProps {
  gift: keyof typeof GIFT_CONFIG
  amount: number
}

const Tag = ({ gift, amount }: TagProps) => {
  return (
    <Wrapper color={GIFT_CONFIG[gift].colors.tagBackground}>
      <Gift src={GIFT_CONFIG[gift].giftImg} alt={gift} />
      <Amount>x {amount}</Amount>
    </Wrapper>
  )
}

export default Tag
