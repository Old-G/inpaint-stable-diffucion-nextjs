'use client'

import { Flex } from '@chakra-ui/react'

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Flex
      w='calc(100vw - 340px)'
      minH='100vh'
      justify={'center'}
      align='center'
      flexGrow={1}
      p={'30px'}
    >
      {children}
    </Flex>
  )
}
