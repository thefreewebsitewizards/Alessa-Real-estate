import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import { products } from './products'

export type CartLine = {
  productId: string
  quantity: number
}

type CartContextValue = {
  items: CartLine[]
  addItem: (productId: string, quantity?: number) => void
  updateQuantity: (productId: string, quantity: number) => void
  removeItem: (productId: string) => void
  clear: () => void
  itemCount: number
  subtotal: number
}

const CartContext = createContext<CartContextValue | undefined>(undefined)

const storageKey = 'aggro-cart'

const getStoredItems = (): CartLine[] => {
  if (typeof window === 'undefined') {
    return []
  }
  const raw = window.localStorage.getItem(storageKey)
  if (!raw) {
    return []
  }
  try {
    const parsed = JSON.parse(raw) as CartLine[]
    if (!Array.isArray(parsed)) {
      return []
    }
    return parsed.filter((item) => typeof item?.productId === 'string' && Number.isFinite(item?.quantity))
  } catch {
    return []
  }
}

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [items, setItems] = useState<CartLine[]>(() => getStoredItems())

  useEffect(() => {
    if (typeof window === 'undefined') {
      return
    }
    window.localStorage.setItem(storageKey, JSON.stringify(items))
  }, [items])

  const addItem = useCallback((productId: string, quantity = 1) => {
    if (!products.find((product) => product.id === productId)) {
      return
    }
    setItems((prev) => {
      const existing = prev.find((item) => item.productId === productId)
      if (!existing) {
        return [...prev, { productId, quantity: Math.max(1, quantity) }]
      }
      return prev.map((item) =>
        item.productId === productId ? { ...item, quantity: item.quantity + Math.max(1, quantity) } : item,
      )
    })
  }, [])

  const updateQuantity = useCallback((productId: string, quantity: number) => {
    setItems((prev) => {
      if (!products.find((product) => product.id === productId)) {
        return prev
      }
      const nextQuantity = Math.max(1, quantity)
      return prev.map((item) => (item.productId === productId ? { ...item, quantity: nextQuantity } : item))
    })
  }, [])

  const removeItem = useCallback((productId: string) => {
    setItems((prev) => prev.filter((item) => item.productId !== productId))
  }, [])

  const clear = useCallback(() => {
    setItems([])
  }, [])

  const itemCount = useMemo(() => items.reduce((sum, item) => sum + item.quantity, 0), [items])
  const subtotal = useMemo(
    () =>
      items.reduce((sum, item) => {
        const product = products.find((entry) => entry.id === item.productId)
        if (!product) {
          return sum
        }
        return sum + product.price * item.quantity
      }, 0),
    [items],
  )

  const value = useMemo(
    () => ({ items, addItem, updateQuantity, removeItem, clear, itemCount, subtotal }),
    [items, addItem, updateQuantity, removeItem, clear, itemCount, subtotal],
  )

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export const useCart = () => {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart must be used within CartProvider')
  }
  return context
}
