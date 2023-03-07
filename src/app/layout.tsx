'use client'

import Providers from './providers'
import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <head />
      <body>
        <Providers>
          {/* <LoadingPerPage /> */}
          {children}
        </Providers>
      </body>
    </html>
  )
}
