'use client'

import { Flex } from '@chakra-ui/react'
import React from 'react'

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Flex w='100vw' minH='100vh'>
      {children}
    </Flex>
  )
}
