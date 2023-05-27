import { GIFT_CONFIG } from '../../configs'

import {
  Wrapper,
  Title,
  MainGift,
  GiftHeader,
  MiniGift,
  GiftTitle,
  GiftDescription,
  BoxList,
  Box,
  Gift,
  GiftName,
  BackButton,
  ConfirmButton,
  ButtonWrapper,
} from './styled'

interface GiftPageProps {
  selectedGift: keyof typeof GIFT_CONFIG
}

const GiftPage = ({ selectedGift }: GiftPageProps) => {
  return (
    <Wrapper color={GIFT_CONFIG[selectedGift].colors.mainBackground}>
      <div>
        <Title color={GIFT_CONFIG[selectedGift].colors.text}>
          เลือกของขวัญให้บาเบลกัน
        </Title>
        <MainGift src={GIFT_CONFIG[selectedGift].giftImg} alt={selectedGift} />
        <GiftHeader>
          <MiniGift
            src={GIFT_CONFIG[selectedGift].giftImg}
            alt={selectedGift}
          />
          <GiftTitle color={GIFT_CONFIG[selectedGift].colors.text}>
            {GIFT_CONFIG[selectedGift].selectedTitle ??
              GIFT_CONFIG[selectedGift].title}
          </GiftTitle>
          <MiniGift
            src={GIFT_CONFIG[selectedGift].giftImg}
            alt={selectedGift}
          />
        </GiftHeader>
        <GiftDescription>
          {GIFT_CONFIG[selectedGift].description}
        </GiftDescription>
        <BoxList>
          {(Object.keys(GIFT_CONFIG) as (keyof typeof GIFT_CONFIG)[]).map(
            (gift) => (
              <Box
                key={gift}
                selected={gift === selectedGift}
                selectedBorderColor={GIFT_CONFIG[gift].colors.border}
                selectedBackgroundColor={
                  GIFT_CONFIG[gift].colors.selectBackground
                }
              >
                <Gift src={GIFT_CONFIG[gift].giftImg} alt={gift} />
                <GiftName>{GIFT_CONFIG[gift].title}</GiftName>
              </Box>
            )
          )}
        </BoxList>
        <ButtonWrapper>
          <BackButton
            color={GIFT_CONFIG[selectedGift].colors.buttonLeft}
            hoverColor={GIFT_CONFIG[selectedGift].colors.selectBackground}
          >
            กลับหน้าหลัก
          </BackButton>
          <ConfirmButton
            color={[
              GIFT_CONFIG[selectedGift].colors.buttonLeft,
              GIFT_CONFIG[selectedGift].colors.buttonRight,
            ]}
          >
            เลือกชิ้นนี้แหละ!
          </ConfirmButton>
        </ButtonWrapper>
      </div>
    </Wrapper>
  )
}

export default GiftPage
