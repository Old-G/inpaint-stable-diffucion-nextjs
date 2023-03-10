'use client'

import { Flex } from '@chakra-ui/react'
import { useAppSelector } from 'entities/redux/store'
import { AuthorizationPage } from 'widgets/AuthorizationPage'

export const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  const isSession = useAppSelector((state) => state.isSession.value)

  return (
    <Flex w='100vw' minH='100vh'>
      {!isSession ? (
        <AuthorizationPage  />
      ) : (
        <>{children}</>
      )}
    </Flex>
  )
}
