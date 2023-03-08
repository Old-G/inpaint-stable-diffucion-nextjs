'use client'

import { Flex } from '@chakra-ui/react'
import { Sidebar } from 'widgets/Sidebar'
import React, { Suspense } from 'react'
import ErrorBoundary from 'entities/ErrorBoundary/ErrorBoundary'
import Error from './error'

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ErrorBoundary>
      <Suspense fallback={''}>
        <Flex w='100vw' minH='100vh'>
          <Sidebar />

          {children}
        </Flex>
      </Suspense>
    </ErrorBoundary>
  )
}

export default AuthLayout
