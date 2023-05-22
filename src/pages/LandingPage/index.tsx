import Card from './components/Card'
import { Wrapper, CardList, Header } from './styled'

const LandingPage = () => {
  return (
    <Wrapper>
      <Header />
      <CardList
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
            gift='boild_egg_suki'
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
    </Wrapper>
  )
}

export default LandingPage
