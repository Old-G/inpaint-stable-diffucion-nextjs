'use client'

import { VStack } from '@chakra-ui/react'
import { SignForm } from 'features/SignForm'
import { SignInForm } from 'features/SignInForm'
import { SignUpForm } from 'features/SignUpForm'
import { useState } from 'react'

export const AuthorizationPage = () => {
  const [isSignForm, setIsSignForm] = useState(true)
  const [isSignInForm, setIsSignInForm] = useState(false)
  const [isSignUpForm, setIsSignUpForm] = useState(false)

  const handleSignIn = () => {
    setIsSignForm(false)
    setIsSignInForm(true)
    setIsSignUpForm(false)
  }

  const handleSignUp = () => {
    setIsSignForm(false)
    setIsSignInForm(false)
    setIsSignUpForm(true)
  }

  return (
    <VStack
      w={'100%'}
      h={'100vh'}
      justify={'center'}
      align={'center'}
      spacing={'50px'}
      bgImage={
        isSignInForm || isSignUpForm
          ? 'url(/assets/images/wave-heart-line-bg.png)'
          : undefined
      }
      bgRepeat={'no-repeat'}
      bgSize={'cover'}
    >
      {isSignForm && (
        <SignForm
          handleSignIn={handleSignIn}
          isSignForm={isSignForm}
          handleSignUp={handleSignUp}
        />
      )}
      {isSignInForm && <SignInForm handleSignUp={handleSignUp} />}
      {isSignUpForm && <SignUpForm handleSignIn={handleSignIn} />}
    </VStack>
  )
}
