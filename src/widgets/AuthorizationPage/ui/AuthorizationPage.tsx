'use client'

import { VStack } from '@chakra-ui/react'
import { SignForm } from 'features/SignForm'
import { SignInForm } from 'features/SignInForm'
import { SignUpForm } from 'features/SignUpForm'
import { useState } from 'react'
import { ForgotPassword } from 'shared/ForgotPassword'

export const AuthorizationPage = () => {
  const [isSignForm, setIsSignForm] = useState(true)
  const [isSignInForm, setIsSignInForm] = useState(false)
  const [isSignUpForm, setIsSignUpForm] = useState(false)
  const [isForgotPasswordForm, setIsForgotPasswordForm] = useState(false)

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

  const handleForgotPassword = () => {
    setIsForgotPasswordForm(true)
    setIsSignForm(false)
    setIsSignInForm(false)
    setIsSignUpForm(false)
  }

  const handleResetPassword = () => {
    setIsSignForm(true)
    setIsSignInForm(false)
    setIsSignUpForm(false)
    setIsForgotPasswordForm(false)
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
          handleForgotPassword={handleForgotPassword}
        />
      )}
      {isSignInForm && (
        <SignInForm
          handleSignUp={handleSignUp}
          handleForgotPassword={handleForgotPassword}
        />
      )}
      {isSignUpForm && <SignUpForm handleSignIn={handleSignIn} />}
      {isForgotPasswordForm && <ForgotPassword handleResetPassword={handleResetPassword} />}
    </VStack>
  )
}
