import { useTheme } from 'styled-components'
import { useMediaQuery } from 'styled-breakpoints/use-media-query'

import Tag from './components/Tag'
import Card from './components/Card'

import {
  Wrapper,
  Header,
  TagList,
  CardList,
  ButtonWrapper,
  StyledButton,
} from './styled'

interface LandingPageProps {
  setPage: (page: string) => void
}

const LandingPage = ({ setPage }: LandingPageProps) => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme!.breakpoints.down('sm'))
  const isTablet = useMediaQuery(theme!.breakpoints.between('sm', 'lg'))

  return (
    <Wrapper>
      <Header />
      <TagList>
        <Tag gift='salad' amount={100} />
        <Tag gift='bomb' amount={90} />
        <Tag gift='microphone' amount={80} />
        <Tag gift='dacapo' amount={70} />
        <Tag gift='schneider' amount={60} />
        <Tag gift='cute_potion' amount={50} />
        <Tag gift='boiled_egg_suki' amount={40} />
        <Tag gift='baabae_pillow' amount={30} />
        <Tag gift='sunflower' amount={20} />
      </TagList>
      <CardList
        minWidth={80}
        colCount={isMobile ? 1 : isTablet ? 2 : 3}
        items={[
          <Card
            gift='salad'
            title='น้องบาแบ๊ะตัวจิ๋ว'
            description='แอบมองไม่ยอมแพ้หรอกนายตัวร้ายเมื่อไหร่ก็ดูจะไม่ทัน ไปสู่ดินแดนแสนวิเศษตราว่ายไปซีเรียสนักพันธุ์นั้นได้ไหมคะแสนวิเศษแค่มองข้ามน้ำข้ามฟ้าข้ามกำแพงแห่งความรู้สึก'
            datetime={new Date('2023-01-01 19:00:00')}
          />,
          <Card
            gift='bomb'
            title='น้องบาแบ๊ะตัวจิ๋ว'
            description='แอบมองไม่ยอมแพ้หรอกนายตัวร้ายเมื่อไหร่ก็ดูจะไม่ทัน ไปสู่ดินแดนแสนวิเศษตราว่ายไปซีเรียสนักพันธุ์นั้นได้ไหมคะแสนวิเศษแค่มองข้ามน้ำข้ามฟ้าข้ามกำแพงแห่งความรู้สึก'
            datetime={new Date('2023-01-01 19:00:00')}
          />,
          <Card
            gift='microphone'
            title='น้องบาแบ๊ะตัวจิ๋ว'
            description='แอบมองไม่ยอมแพ้หรอกนายตัวร้ายเมื่อไหร่ก็ดูจะไม่ทัน ไปสู่ดินแดนแสนวิเศษตราว่ายไปซีเรียสนักพันธุ์นั้นได้ไหมคะแสนวิเศษแค่มองข้ามน้ำข้ามฟ้าข้ามกำแพงแห่งความรู้สึก'
            datetime={new Date('2023-01-01 19:00:00')}
          />,
          <Card
            gift='dacapo'
            title='น้องบาแบ๊ะตัวจิ๋ว'
            description='แดนแสนวิเศษตราว่ายไปซีเรียสนักพันธุ์นั้นได้ไหมคะ ไปสู่ดินแดนแสนวิเศษแค่มองข้ามน้ำข้ามฟ้าข้ามกำแพงแห่งความรู้สึกรัก ไปสู่ดินแดนแสนวิเศษแค่เพียงหัวใจรู้มาสะบัดปล่อยใจคงต้องฝันสักเท่าไหร่คงจะยังไง'
            datetime={new Date('2023-01-01 19:00:00')}
          />,
          <Card
            gift='schneider'
            title='น้องบาแบ๊ะตัวจิ๋ว'
            description='แดนแสนวิเศษตราว่ายไปซีเรียสนักพันธุ์นั้นได้ไหมคะ ไปสู่ดินแดนแสนวิเศษแค่มองข้ามน้ำข้ามฟ้าข้ามกำแพงแห่งความรู้สึกรัก ไปสู่ดินแดนแสนวิเศษแค่เพียงหัวใจรู้มาสะบัดปล่อยใจคงต้องฝันสักเท่าไหร่คงจะยังไง'
            datetime={new Date('2023-01-01 19:00:00')}
          />,
          <Card
            gift='cute_potion'
            title='น้องบาแบ๊ะตัวจิ๋ว'
            description='แดนแสนวิเศษตราว่ายไปซีเรียสนักพันธุ์นั้นได้ไหมคะ ไปสู่ดินแดนแสนวิเศษแค่มองข้ามน้ำข้ามฟ้าข้ามกำแพงแห่งความรู้สึกรัก ไปสู่ดินแดนแสนวิเศษแค่เพียงหัวใจรู้มาสะบัดปล่อยใจคงต้องฝันสักเท่าไหร่คงจะยังไง'
            datetime={new Date('2023-01-01 19:00:00')}
          />,
          <Card
            gift='boiled_egg_suki'
            title='น้องบาแบ๊ะตัวจิ๋ว'
            description='แดนแสนวิเศษตราว่ายไปซีเรียสนักพันธุ์นั้นได้ไหมคะ ไปสู่ดินแดนแสนวิเศษแค่มองข้ามน้ำข้ามฟ้าข้ามกำแพงแห่งความรู้สึกรัก ไปสู่ดินแดนแสนวิเศษแค่เพียงหัวใจรู้มาสะบัดปล่อยใจคงต้องฝันสักเท่าไหร่คงจะยังไง แดนแสนวิเศษตราว่ายไปซีเรียสนักพันธุ์นั้นได้ไหมคะ ไปสู่ดินแดนแสนวิเศษแค่มองข้ามน้ำข้ามฟ้าข้ามกำแพงแห่งความรู้ คงต้องฝันสักเท่าไหร่'
            datetime={new Date('2023-01-01 19:00:00')}
          />,
          <Card
            gift='baabae_pillow'
            title='น้องบาแบ๊ะตัวจิ๋ว'
            description='แดนแสนวิเศษตราว่ายไปซีเรียสนักพันธุ์นั้นได้ไหมคะ ไปสู่ดินแดนแสนวิเศษแค่มองข้ามน้ำข้ามฟ้าข้ามกำแพงแห่งความรู้สึกรัก ไปสู่ดินแดนแสนวิเศษแค่เพียงหัวใจรู้มาสะบัดปล่อยใจคงต้องฝันสักเท่าไหร่คงจะยังไง แดนแสนวิเศษตราว่ายไปซีเรียสนักพันธุ์นั้นได้ไหมคะ ไปสู่ดินแดนแสนวิเศษแค่มองข้ามน้ำข้ามฟ้าข้ามกำแพงแห่งความรู้ คงต้องฝันสักเท่าไหร่'
            datetime={new Date('2023-01-01 19:00:00')}
          />,
          <Card
            gift='sunflower'
            title='น้องบาแบ๊ะตัวจิ๋ว'
            description='แดนแสนวิเศษตราว่ายไปซีเรียสนักพันธุ์นั้นได้ไหมคะ ไปสู่ดินแดนแสนวิเศษแค่มองข้ามน้ำข้ามฟ้าข้ามกำแพงแห่งความรู้สึกรัก ไปสู่ดินแดนแสนวิเศษแค่เพียงหัวใจรู้มาสะบัดปล่อยใจคงต้องฝันสักเท่าไหร่คงจะยังไง แดนแสนวิเศษตราว่ายไปซีเรียสนักพันธุ์นั้นได้ไหมคะ ไปสู่ดินแดนแสนวิเศษแค่มองข้ามน้ำข้ามฟ้าข้ามกำแพงแห่งความรู้ คงต้องฝันสักเท่าไหร่'
            datetime={new Date('2023-01-01 19:00:00')}
          />,
        ]}
      />
      <ButtonWrapper>
        <StyledButton icon='plus' onClick={() => setPage('giftPage')}>
          เขียนคำอวยพร
        </StyledButton>
      </ButtonWrapper>
    </Wrapper>
  )
}

export default LandingPage
