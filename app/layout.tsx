import { Metadata } from 'next'
import { Providers } from '@/shared/ui'
import { ClientLayout } from './client-layout'
import './globals.css'

export const metadata: Metadata = {
  title: 'WTW Client',
  description: 'Web Pet WTW Client Application',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <ClientLayout>
            {children}
          </ClientLayout>
        </Providers>
      </body>
    </html>
  )
}
