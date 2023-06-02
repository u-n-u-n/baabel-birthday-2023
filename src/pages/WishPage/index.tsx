import { useState } from 'react'

import {
  GIFT_CONFIG,
  MAX_SENDER_NAME_LENGTH,
  MAX_WISH_LENGTH,
} from '../../configs'
import { useDatabaseContext } from '../../contexts/database'

import {
  Wrapper,
  Title,
  Baabae,
  SenderName,
  WishBox,
  FormWrapper,
  CharacterLimit,
  ButtonWrapper,
  BackButton,
  ConfirmButton,
} from './styled'

interface WishPageProps {
  selectedGift: keyof typeof GIFT_CONFIG
  setPage: (page: string) => void
}

const WishPage = ({ selectedGift, setPage }: WishPageProps) => {
  const { createWish } = useDatabaseContext()
  const [senderName, setSenderName] = useState('')
  const [wish, setWish] = useState('')

  const onSubmit = () => {
    if (senderName && wish) {
      createWish({ gift: selectedGift, senderName, wish })
      setPage('landingPage')
    }
  }

  return (
    <Wrapper color={GIFT_CONFIG[selectedGift].colors.mainBackground}>
      <div>
        <Title color={GIFT_CONFIG[selectedGift].colors.text}>
          เขียนคำอวยพรให้บาเบล
        </Title>
        <Baabae
          src={GIFT_CONFIG[selectedGift].baabaeImg}
          alt={'Baabae hold ' + selectedGift}
        />
        <FormWrapper>
          <SenderName
            maxLength={MAX_SENDER_NAME_LENGTH}
            type='text'
            placeholder='ชื่ออะไรฮะ...'
            color={GIFT_CONFIG[selectedGift].colors.border}
            shadowColor={GIFT_CONFIG[selectedGift].colors.mainBackground}
            value={senderName}
            onChange={(e) => setSenderName(e.target.value)}
          />
          <WishBox
            maxLength={MAX_WISH_LENGTH}
            rows={7}
            placeholder='เขียนอวยพรตรงนี้เลย...'
            color={GIFT_CONFIG[selectedGift].colors.border}
            shadowColor={GIFT_CONFIG[selectedGift].colors.mainBackground}
            onChange={(e) => setWish(e.target.value)}
          >
            {wish}
          </WishBox>
          <CharacterLimit color={GIFT_CONFIG[selectedGift].colors.border}>
            คำอวยพร {wish.length}/{MAX_WISH_LENGTH} ตัวอักษร
          </CharacterLimit>
          <ButtonWrapper>
            <BackButton
              color={GIFT_CONFIG[selectedGift].colors.buttonLeft}
              hoverColor={GIFT_CONFIG[selectedGift].colors.selectBackground}
              onClick={() => setPage('giftPage')}
            >
              ย้อนกลับ
            </BackButton>
            <ConfirmButton
              color={[
                GIFT_CONFIG[selectedGift].colors.buttonLeft,
                GIFT_CONFIG[selectedGift].colors.buttonRight,
              ]}
              disabled={!senderName || !wish}
              disabledColor={GIFT_CONFIG[selectedGift].colors.mainBackground}
              onClick={onSubmit}
            >
              ส่งคำอวยพร
            </ConfirmButton>
          </ButtonWrapper>
        </FormWrapper>
      </div>
    </Wrapper>
  )
}

export default WishPage
