import { GIFT_CONFIG } from '../../../../configs'
import {
  Wrapper,
  Header,
  Sender,
  BaabaeMini,
  Title,
  Gift,
  Description,
  DateAndTime,
} from './styled'

interface CardProps {
  gift: keyof typeof GIFT_CONFIG
  title: string
  description: string
  datetime: Date
}

const Card = ({ gift, title, description, datetime }: CardProps) => {
  return (
    <Wrapper>
      <Header>
        <Sender>
          <BaabaeMini src={GIFT_CONFIG[gift].baabaeImg} alt={gift} />
          <Title color={GIFT_CONFIG[gift].colors.text}>{title}</Title>
        </Sender>
        <Gift src={GIFT_CONFIG[gift].giftImg} alt={gift} />
      </Header>
      <Description>{description}</Description>
      <DateAndTime>
        <div>
          {datetime.toLocaleDateString('th-TH', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
          })}
        </div>
        <div>
          {datetime.toLocaleTimeString('th-TH', {
            hour: '2-digit',
            minute: '2-digit',
          })}{' '}
          น.
        </div>
      </DateAndTime>
    </Wrapper>
  )
}

export default Card
