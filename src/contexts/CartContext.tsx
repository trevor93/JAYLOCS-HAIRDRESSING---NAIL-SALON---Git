import React, { createContext, useContext, useState, ReactNode } from 'react'

interface CartItem {
  id: string
  name: string
  price: number
  quantity: number
  type: 'service' | 'product'
}

interface CartContextType {
  items: CartItem[]
  serviceItems: CartItem[]
  productItems: CartItem[]
  addItem: (item: Omit<CartItem, 'quantity'>) => void
  removeItem: (id: string) => void
  updateQuantity: (id: string, quantity: number) => void
  clearCart: () => void
  clearServices: () => void
  clearProducts: () => void
  total: number
  serviceTotal: number
  productTotal: number
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export const useCart = () => {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>([])

  const serviceItems = items.filter(item => item.type === 'service')
  const productItems = items.filter(item => item.type === 'product')

  const addItem = (newItem: Omit<CartItem, 'quantity'>) => {
    setItems(prev => {
      const existing = prev.find(item => item.id === newItem.id)
      if (existing) {
        return prev.map(item =>
          item.id === newItem.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      }
      return [...prev, { ...newItem, quantity: 1 }]
    })
  }

  const removeItem = (id: string) => {
    setItems(prev => prev.filter(item => item.id !== id))
  }

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity === 0) {
      removeItem(id)
      return
    }
    setItems(prev =>
      prev.map(item =>
        item.id === id ? { ...item, quantity } : item
      )
    )
  }

  const clearCart = () => {
    setItems([])
  }

  const clearServices = () => {
    setItems(prev => prev.filter(item => item.type !== 'service'))
  }

  const clearProducts = () => {
    setItems(prev => prev.filter(item => item.type !== 'product'))
  }

  const total = items.reduce((sum, item) => sum + (item.price * item.quantity), 0)
  const serviceTotal = serviceItems.reduce((sum, item) => sum + (item.price * item.quantity), 0)
  const productTotal = productItems.reduce((sum, item) => sum + (item.price * item.quantity), 0)

  return (
    <CartContext.Provider value={{
      items,
      serviceItems,
      productItems,
      addItem,
      removeItem,
      updateQuantity,
      clearCart,
      clearServices,
      clearProducts,
      total,
      serviceTotal,
      productTotal
    }}>
      {children}
    </CartContext.Provider>
  )
}