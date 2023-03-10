'use client'

import Providers from './providers'
import './globals.css'
import { Sidebar } from 'widgets/Sidebar'
import { AuthLayout } from 'features/AuthLayout'
import { Layout } from 'features/Layout'

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
          <AuthLayout>
            <Sidebar />

            <Layout>{children}</Layout>
          </AuthLayout>
        </Providers>
      </body>
    </html>
  )
}
