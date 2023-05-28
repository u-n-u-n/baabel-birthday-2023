import baabaeSaladImg from './assets/images/baabae_salad.png'
import baabaeBombImg from './assets/images/baabae_bomb.png'
import baabaeMicrophoneImg from './assets/images/baabae_microphone.png'
import baabaeDacapoImg from './assets/images/baabae_dacapo.png'
import baabaeSchneiderImg from './assets/images/baabae_schneider.png'
import baabaeCutePotionImg from './assets/images/baabae_cute_potion.png'
import baabaeBoiledEggSukiImg from './assets/images/baabae_boiled_egg_suki.png'
import baabaeBaabaePillowImg from './assets/images/baabae_baabae_pillow.png'
import baabaeSunflowerImg from './assets/images/baabae_sunflower.png'

import saladImg from './assets/images/salad.png'
import bombImg from './assets/images/bomb.png'
import microphoneImg from './assets/images/microphone.png'
import dacapoImg from './assets/images/dacapo.png'
import schneiderImg from './assets/images/schneider.png'
import cutePotionImg from './assets/images/cute_potion.png'
import boiledEddSukiImg from './assets/images/boiled_egg_suki.png'
import baabaePillowImg from './assets/images/baabae_pillow.png'
import sunflowerImg from './assets/images/sunflower.png'

interface GiftConfigValueType {
  baabaeImg: string
  giftImg: string
  title: string
  selectedTitle?: string
  description: string
  colors: {
    text: string
    border: string
    buttonLeft: string
    buttonRight: string
    mainBackground: string
    tagBackground: string
    selectBackground: string
  }
}

interface GiftConfigType {
  salad: GiftConfigValueType
  bomb: GiftConfigValueType
  microphone: GiftConfigValueType
  dacapo: GiftConfigValueType
  schneider: GiftConfigValueType
  cute_potion: GiftConfigValueType
  boiled_egg_suki: GiftConfigValueType
  baabae_pillow: GiftConfigValueType
  sunflower: GiftConfigValueType
}

export const GIFT_CONFIG: GiftConfigType = {
  salad: {
    baabaeImg: baabaeSaladImg,
    giftImg: saladImg,
    title: 'ผักสลัด',
    description:
      'ผักสลัดหน้าโบสถ์ที่ปลูกและปรุงรสโดยนายน้อย\nให้ของขวัญเป็นผักเพื่อสานฝันสร้างตู้สลัดบาร์ให้บาเบล',
    colors: {
      text: '#487D45',
      border: '#6BBA69',
      buttonLeft: '#6BBA69',
      buttonRight: '#B5E3AD',
      mainBackground: '#D8ECC8',
      tagBackground: '#E7F1D4',
      selectBackground: '#F9FFEE',
    },
  },
  bomb: {
    baabaeImg: baabaeBombImg,
    giftImg: bombImg,
    title: 'ระเบิด',
    selectedTitle: 'ระเบิดบาเบล Beam!',
    description:
      'บาเบลผู้ระเบิดทุกอย่างบนโลกใบนี้ แต่ระเบิดที่มีพลังทำลายล้าง\nมากที่สุดคือระเบิดความน่ารักของตัวเอง บาเบลบีม!!!',
    colors: {
      text: '#DD6F63',
      border: '#EE8B81',
      buttonLeft: '#EE8B81',
      buttonRight: '#FDC8C3',
      mainBackground: '#FFE1DE',
      tagBackground: '#FFE4E1',
      selectBackground: '#FFEFED',
    },
  },
  microphone: {
    baabaeImg: baabaeMicrophoneImg,
    giftImg: microphoneImg,
    title: 'ไมโครโฟน',
    description:
      'ไมโครโฟนขยายเสียงไพเราะแบบหูเคลือบทอง\nอยากให้บาเบลมั่นใจในเสียงตัวเอง เพราะเสียงบาเบลมีเสน่ห์มาก',
    colors: {
      text: '#4279D1',
      border: '#5D8ACF',
      buttonLeft: '#5D8ACF',
      buttonRight: '#B7D0F9',
      mainBackground: '#DFEBFE',
      tagBackground: '#E3EEFF',
      selectBackground: '#EDF5FF',
    },
  },
  dacapo: {
    baabaeImg: baabaeDacapoImg,
    giftImg: dacapoImg,
    title: 'น้องเจี๊ยบ',
    description:
      'ให้น้องเจี๊ยบเป็นของขวัญ ดากะโปะจะสามารถเป็นได้ทั้งเพื่อน\nน้องชาย และอาหารสำรอง ดื้อเมื่อไหร่จับกินได้เลย',
    colors: {
      text: '#E8A115',
      border: '#E9B738',
      buttonLeft: '#E9B738',
      buttonRight: '#FFE5A3',
      mainBackground: '#FEEBBB',
      tagBackground: '#FFF1CD',
      selectBackground: '#FFF8E1',
    },
  },
  schneider: {
    baabaeImg: baabaeSchneiderImg,
    giftImg: schneiderImg,
    title: 'พี่ชไน',
    description:
      'ให้ชไนเดอร์เป็นของขวัญ จารย์จะสามารถเป็น Comfort zone\nให้บาเบลได้ และสามารถเป็นอาหารสำรองได้เช่นกัน',
    colors: {
      text: '#976BCC',
      border: '#A783D2',
      buttonLeft: '#A783D2',
      buttonRight: '#CEAFF2',
      mainBackground: '#EDE0FD',
      tagBackground: '#F4EBFF',
      selectBackground: '#F6EEFF',
    },
  },
  cute_potion: {
    baabaeImg: baabaeCutePotionImg,
    giftImg: cutePotionImg,
    title: 'โพชั่น',
    selectedTitle: 'โพชั่นความน่ารัก',
    description:
      'ส่งโพชั่นความน่ารักให้บาเบล ถึงแม้ว่าจะน่ารักมากอยู่แล้วก็ตาม\nสิ่งนี้จะเพิ่มความน่ารักกะไม่ให้ใครได้ลืมตาอ้าปากไปเลย',
    colors: {
      text: '#F56C9D',
      border: '#E882A6',
      buttonLeft: '#E882A6',
      buttonRight: '#FFCBDD',
      mainBackground: '#FFE1EC',
      tagBackground: '#FFE9F1',
      selectBackground: '#FFF1F6',
    },
  },
  boiled_egg_suki: {
    baabaeImg: baabaeBoiledEggSukiImg,
    giftImg: boiledEddSukiImg,
    title: 'สุกี้ไข่ต้ม',
    description:
      'สุกี้ไข่ต้มตัวนี้สามารถช่วยบาเบลเฝ้าโบสถ์ได้ น้องไม่ดุ\nน่ารักใจดี และช่วยอยู่เป็นเพื่อนบาแบ๊ะในวันที่นายน้อยไม่ว่างได้',
    colors: {
      text: '#E9882F',
      border: '#ED9E57',
      buttonLeft: '#ED9E57',
      buttonRight: '#FECB9D',
      mainBackground: '#FFE7D1',
      tagBackground: '#FFE7D1',
      selectBackground: '#FFEEDF',
    },
  },
  baabae_pillow: {
    baabaeImg: baabaeBaabaePillowImg,
    giftImg: baabaePillowImg,
    title: 'หมอนแบ๊ะ',
    description:
      'นายน้อยที่ชอบนอน หมอนบาเบ๊ะจะทำให้บาเบลหลับสบายทั้งวัน\nไม่ว่าจะนอนเช้า กลางวัน เย็น หรือตลอดทั้งวัน~',
    colors: {
      text: '#4BA9AF',
      border: '#53BCC2',
      buttonLeft: '#53BCC2',
      buttonRight: '#A8E1E4',
      mainBackground: '#DBF6F8',
      tagBackground: '#E1F6F8',
      selectBackground: '#ECF8F9',
    },
  },
  sunflower: {
    baabaeImg: baabaeSunflowerImg,
    giftImg: sunflowerImg,
    title: 'ทานตะวัน',
    selectedTitle: 'ดอกทานตะวัน',
    description:
      'มาปลูกดอกทานตะวันที่บาเบลชอบให้เต็มโบสถ์กัน~\nให้นายน้อยสดใสเหมือนดอกทานตะวันรับแสงอาทิตย์เลย',
    colors: {
      text: '#E79D0E',
      border: '#EEB13B',
      buttonLeft: '#EEB13B',
      buttonRight: '#FFE2A9',
      mainBackground: '#FEECC8',
      tagBackground: '#FFF0D1',
      selectBackground: '#FFF6E4',
    },
  },
}

export const MAX_SENDER_NAME_LENGTH = 30

export const MAX_WISH_LENGTH = 500
