import {
  ReactNode,
  createContext,
  useContext,
  useMemo,
  useState,
  useEffect,
} from 'react'

import { initializeApp } from 'firebase/app'
import { getDatabase, ref, push, onValue, Database } from 'firebase/database'
import { getAnalytics, logEvent } from 'firebase/analytics'

import { GIFT_CONFIG } from '../configs'
import dumpDatabase from '../database.json'

const isFirebaseEnabled = import.meta.env.VITE_FIREBASE_ENABLED === 'true'
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

let db: Database | null = null
if (isFirebaseEnabled) {
  const app = initializeApp(firebaseConfig)
  const analytics = getAnalytics(app)

  db = getDatabase(app)

  logEvent(analytics, 'page_view')
}

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
  isAllowCreateNewWish: boolean
  stats: Stats
  wishes: Wish[]
  createWish: (props: CreateWishProps) => void
}

const DatabaseContext = createContext<DatabaseContextValue>(
  {} as DatabaseContextValue
)

export const DatabaseProvider = ({ children }: DatabaseProviderProps) => {
  const [wishes, setWishes] = useState<Wish[]>([])

  const stats = useMemo(
    () =>
      wishes.reduce(
        (obj, wish) => ({
          ...obj,
          [wish.gift]: {
            ...obj[wish.gift],
            amount: (obj[wish.gift]?.amount ?? 0) + 1,
          },
        }),
        {} as Stats
      ),
    [wishes]
  )

  const createWish = ({ gift, senderName, wish }: CreateWishProps) => {
    if (!isFirebaseEnabled) return

    push(ref(db!, 'wishes'), {
      gift,
      senderName,
      wish,
      timestamp: Date.now(),
    })
  }

  const updateWishes = (data: any) => {
    const results = data
      ? Object.entries(data)
          .map(([key, value]) => {
            return { id: key, ...(value as any) } as Wish
          })
          .sort((a, b) => a.timestamp - b.timestamp)
      : []
    setWishes(results)
  }

  useEffect(() => {
    if (isFirebaseEnabled) {
      onValue(ref(db!, 'wishes'), (snapshot) => {
        const data = snapshot.val()
        updateWishes(data)
      })
    } else {
      updateWishes(dumpDatabase.wishes)
    }
  }, [])

  return (
    <DatabaseContext.Provider
      value={{
        isAllowCreateNewWish: isFirebaseEnabled,
        stats,
        wishes,
        createWish,
      }}
    >
      {children}
    </DatabaseContext.Provider>
  )
}

export const useDatabaseContext = () => {
  return useContext(DatabaseContext)
}
