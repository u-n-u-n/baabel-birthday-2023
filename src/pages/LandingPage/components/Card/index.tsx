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
  id: string
  gift: keyof typeof GIFT_CONFIG
  senderName: string
  wish: string
  timestamp: number
}

const Card = ({ id, gift, senderName, wish, timestamp }: CardProps) => {
  const datetime = new Date(timestamp)

  return (
    <Wrapper id={id}>
      <Header>
        <Sender>
          <BaabaeMini src={GIFT_CONFIG[gift].baabaeImg} alt={gift} />
          <Title color={GIFT_CONFIG[gift].colors.text}>{senderName}</Title>
        </Sender>
        <Gift src={GIFT_CONFIG[gift].giftImg} alt={gift} />
      </Header>
      <Description>{wish}</Description>
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
