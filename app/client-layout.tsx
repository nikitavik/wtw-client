'use client'

import { Navigation } from '@/shared/ui'

interface ClientLayoutProps {
  children: React.ReactNode
}

export function ClientLayout({ children }: ClientLayoutProps) {
  return (
    <>
      <Navigation />
      {children}
    </>
  )
}


