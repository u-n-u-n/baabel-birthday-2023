import { GIFT_CONFIG } from '../../configs'
import lambLeftHand from '../../assets/images/lamb_lefthand.png'
import lambRightHand from '../../assets/images/lamb_righthand.png'

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
  LambLeftHand,
  LambRightHand,
} from './styled'

interface GiftPageProps {
  selectedGift: keyof typeof GIFT_CONFIG
  setSelectedGift: (selectedGift: keyof typeof GIFT_CONFIG) => void
  setPage: (page: string) => void
}

const GiftPage = ({
  selectedGift,
  setSelectedGift,
  setPage,
}: GiftPageProps) => {
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
            (gift) => {
              const selected = gift === selectedGift
              return (
                <Box
                  key={gift}
                  selected={selected}
                  selectedBorderColor={GIFT_CONFIG[gift].colors.border}
                  selectedBackgroundColor={
                    GIFT_CONFIG[gift].colors.selectBackground
                  }
                  onClick={() => setSelectedGift(gift)}
                >
                  <Gift src={GIFT_CONFIG[gift].giftImg} alt={gift} />
                  <GiftName>{GIFT_CONFIG[gift].title}</GiftName>
                  {selected ? (
                    <>
                      <LambLeftHand src={lambLeftHand} alt={lambLeftHand} />
                      <LambRightHand src={lambRightHand} alt={lambRightHand} />
                    </>
                  ) : null}
                </Box>
              )
            }
          )}
        </BoxList>
        <ButtonWrapper>
          <BackButton
            color={GIFT_CONFIG[selectedGift].colors.buttonLeft}
            hoverColor={GIFT_CONFIG[selectedGift].colors.selectBackground}
            onClick={() => setPage('landingPage')}
          >
            กลับหน้าหลัก
          </BackButton>
          <ConfirmButton
            color={[
              GIFT_CONFIG[selectedGift].colors.buttonLeft,
              GIFT_CONFIG[selectedGift].colors.buttonRight,
            ]}
            onClick={() => setPage('wishPage')}
          >
            เลือกชิ้นนี้แหละ!
          </ConfirmButton>
        </ButtonWrapper>
      </div>
    </Wrapper>
  )
}

export default GiftPage
