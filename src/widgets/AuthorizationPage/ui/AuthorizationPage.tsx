'use client'

import { VStack } from '@chakra-ui/react'
import { SignForm } from 'features/SignForm'
import { SignInForm } from 'features/SignInForm'
import { useState } from 'react'

export const AuthorizationPage = () => {
  const [isSignIn, setIsSignIn] = useState(false)

  const handleSignIn = () => {
    setIsSignIn(true)
  }

  return (
    <VStack
      w={'100%'}
      h={'100vh'}
      justify={'center'}
      align={'center'}
      spacing={'50px'}
    >
      {!isSignIn && <SignForm handleSignIn={handleSignIn} />}
      {isSignIn && <SignInForm />}
    </VStack>
  )
}
