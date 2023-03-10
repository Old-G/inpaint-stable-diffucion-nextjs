'use client'

import { Flex } from '@chakra-ui/react'
import { Sidebar } from 'widgets/Sidebar'
import React, { Suspense } from 'react'
import ErrorBoundary from 'entities/ErrorBoundary/ErrorBoundary'

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Suspense fallback={''}>
      <ErrorBoundary>
        <Flex w='100vw' minH='100vh'>
          <Sidebar />

          {children}
        </Flex>
      </ErrorBoundary>
    </Suspense>
  )
}

export default AuthLayout
