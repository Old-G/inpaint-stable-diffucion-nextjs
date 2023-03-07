'use client'

import { Flex } from '@chakra-ui/react'
import { Sidebar } from 'widgets/Sidebar'
import React from 'react'

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Flex w='100vw' minH='100vh'>
      <Sidebar />

      {children}
    </Flex>
  )
}

export default AuthLayout
