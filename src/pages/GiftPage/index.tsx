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
  gift: keyof typeof GIFT_CONFIG
}

const GiftPage = ({ gift }: GiftPageProps) => {
  return (
    <Wrapper color={GIFT_CONFIG[gift].colors.mainBackground}>
      <div>
        <Title color={GIFT_CONFIG[gift].colors.text}>
          เลือกของขวัญให้บาเบลกัน
        </Title>
        <MainGift src={GIFT_CONFIG[gift].giftImg} alt={gift} />
        <GiftHeader>
          <MiniGift src={GIFT_CONFIG[gift].giftImg} alt={gift} />
          <GiftTitle color={GIFT_CONFIG[gift].colors.text}>
            {GIFT_CONFIG[gift].selectedTitle ?? GIFT_CONFIG[gift].title}
          </GiftTitle>
          <MiniGift src={GIFT_CONFIG[gift].giftImg} alt={gift} />
        </GiftHeader>
        <GiftDescription>{GIFT_CONFIG[gift].description}</GiftDescription>
        <BoxList>
          <Box
            selected
            selectedBorderColor={GIFT_CONFIG['salad'].colors.border}
            selectedBackgroundColor={
              GIFT_CONFIG['salad'].colors.selectBackground
            }
          >
            <Gift src={GIFT_CONFIG['salad'].giftImg} alt='salad' />
            <GiftName>{GIFT_CONFIG['salad'].title}</GiftName>
          </Box>
          <Box
            selected={false}
            selectedBorderColor={GIFT_CONFIG['bomb'].colors.border}
            selectedBackgroundColor={
              GIFT_CONFIG['bomb'].colors.selectBackground
            }
          >
            <Gift src={GIFT_CONFIG['bomb'].giftImg} alt='bomb' />
            <GiftName>{GIFT_CONFIG['bomb'].title}</GiftName>
          </Box>
          <Box
            selected={false}
            selectedBorderColor={GIFT_CONFIG['microphone'].colors.border}
            selectedBackgroundColor={
              GIFT_CONFIG['microphone'].colors.selectBackground
            }
          >
            <Gift src={GIFT_CONFIG['microphone'].giftImg} alt='microphone' />
            <GiftName>{GIFT_CONFIG['microphone'].title}</GiftName>
          </Box>
          <Box
            selected={false}
            selectedBorderColor={GIFT_CONFIG['dacapo'].colors.border}
            selectedBackgroundColor={
              GIFT_CONFIG['dacapo'].colors.selectBackground
            }
          >
            <Gift src={GIFT_CONFIG['dacapo'].giftImg} alt='dacapo' />
            <GiftName>{GIFT_CONFIG['dacapo'].title}</GiftName>
          </Box>
          <Box
            selected={false}
            selectedBorderColor={GIFT_CONFIG['schneider'].colors.border}
            selectedBackgroundColor={
              GIFT_CONFIG['schneider'].colors.selectBackground
            }
          >
            <Gift src={GIFT_CONFIG['schneider'].giftImg} alt='schneider' />
            <GiftName>{GIFT_CONFIG['schneider'].title}</GiftName>
          </Box>
          <Box
            selected={false}
            selectedBorderColor={GIFT_CONFIG['cute_potion'].colors.border}
            selectedBackgroundColor={
              GIFT_CONFIG['cute_potion'].colors.selectBackground
            }
          >
            <Gift src={GIFT_CONFIG['cute_potion'].giftImg} alt='cute_potion' />
            <GiftName>{GIFT_CONFIG['cute_potion'].title}</GiftName>
          </Box>
          <Box
            selected={false}
            selectedBorderColor={GIFT_CONFIG['boiled_egg_suki'].colors.border}
            selectedBackgroundColor={
              GIFT_CONFIG['boiled_egg_suki'].colors.selectBackground
            }
          >
            <Gift
              src={GIFT_CONFIG['boiled_egg_suki'].giftImg}
              alt='boiled_egg_suki'
            />
            <GiftName>{GIFT_CONFIG['boiled_egg_suki'].title}</GiftName>
          </Box>
          <Box
            selected={false}
            selectedBorderColor={GIFT_CONFIG['baabae_pillow'].colors.border}
            selectedBackgroundColor={
              GIFT_CONFIG['baabae_pillow'].colors.selectBackground
            }
          >
            <Gift
              src={GIFT_CONFIG['baabae_pillow'].giftImg}
              alt='baabae_pillow'
            />
            <GiftName>{GIFT_CONFIG['baabae_pillow'].title}</GiftName>
          </Box>
          <Box
            selected={false}
            selectedBorderColor={GIFT_CONFIG['sunflower'].colors.border}
            selectedBackgroundColor={
              GIFT_CONFIG['sunflower'].colors.selectBackground
            }
          >
            <Gift src={GIFT_CONFIG['sunflower'].giftImg} alt='sunflower' />
            <GiftName>{GIFT_CONFIG['sunflower'].title}</GiftName>
          </Box>
        </BoxList>
        <ButtonWrapper>
          <BackButton
            color={GIFT_CONFIG[gift].colors.buttonLeft}
            hoverColor={GIFT_CONFIG[gift].colors.selectBackground}
          >
            กลับหน้าหลัก
          </BackButton>
          <ConfirmButton
            color={[
              GIFT_CONFIG[gift].colors.buttonLeft,
              GIFT_CONFIG[gift].colors.buttonRight,
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
