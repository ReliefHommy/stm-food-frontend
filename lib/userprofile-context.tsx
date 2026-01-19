//app/lib/userprofile-context.tsx
'use client'

import { createContext, useContext, useState, ReactNode } from 'react'

interface Store {
  id: string
  name: string
}

interface UserprofileContextType {
  currentStore: Store | null
  setCurrentStore: (store: Store | null) => void
  stores: Store[]
}

const UserprofileContext = createContext<UserprofileContextType | undefined>(undefined)

export function UserprofileProvider({ children }: { children: ReactNode }) {
  const [currentStore, setCurrentStore] = useState<Store | null>(null)
  const [stores] = useState<Store[]>([
    { id: '1', name: 'Store A' },
    { id: '2', name: 'Store B' },
    { id: '3', name: 'Store C' },
  ]) // Mock data

  return (
    <UserprofileContext.Provider value={{ currentStore, setCurrentStore, stores }}>
      {children}
    </UserprofileContext.Provider>
  )
}

export function useAdmin() {
  const context = useContext(UserprofileContext)
  if (context === undefined) {
    throw new Error('useAdmin must be used within an AdminProvider')
  }
  return context
}