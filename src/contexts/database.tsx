import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react'

import { initializeApp } from 'firebase/app'
import { getDatabase, ref, set, push, onValue } from 'firebase/database'

import { GIFT_CONFIG } from '../configs'

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
  databaseURL: import.meta.env.VITE_FIREBASE_DATABASE_URL,
}

const app = initializeApp(firebaseConfig)
const db = getDatabase(app)

interface DatabaseProviderProps {
  children: ReactNode
}

type Stats = {
  [key in keyof typeof GIFT_CONFIG]?: {
    amount: number
  }
}

interface Wish {
  id: string
  gift: keyof typeof GIFT_CONFIG
  senderName: string
  wish: string
  timestamp: number
}

interface CreateWishProps {
  gift: keyof typeof GIFT_CONFIG
  senderName: string
  wish: string
}

interface DatabaseContextValue {
  stats: Stats
  wishes: Wish[]
  createWish: (props: CreateWishProps) => void
}

const DatabaseContext = createContext<DatabaseContextValue>(
  {} as DatabaseContextValue
)

export const DatabaseProvider = ({ children }: DatabaseProviderProps) => {
  const [stats, setStats] = useState<Stats>({})
  const [wishes, setWishes] = useState<Wish[]>([])

  const increaseStat = (gift: keyof typeof GIFT_CONFIG) => {
    set(ref(db, `stats/${gift}`), {
      amount: (stats[gift]?.amount ?? 0) + 1,
    })
  }

  const createWish = ({ gift, senderName, wish }: CreateWishProps) => {
    push(ref(db, 'wishes'), {
      gift,
      senderName,
      wish,
      timestamp: Date.now(),
    })
    increaseStat(gift)
  }

  useEffect(() => {
    onValue(ref(db, 'stats'), (snapshot) => {
      const data = snapshot.val() as Stats
      setStats(data ?? {})
    })
  }, [])

  useEffect(() => {
    onValue(ref(db, 'wishes'), (snapshot) => {
      const data = snapshot.val()
      const results = data
        ? Object.entries(data)
            .map(([key, value]) => {
              return { id: key, ...(value as any) } as Wish
            })
            .sort((a, b) => b.timestamp - a.timestamp)
        : []
      setWishes(results)
    })
  }, [])

  return (
    <DatabaseContext.Provider value={{ stats, wishes, createWish }}>
      {children}
    </DatabaseContext.Provider>
  )
}

export const useDatabaseContext = () => {
  return useContext(DatabaseContext)
}
