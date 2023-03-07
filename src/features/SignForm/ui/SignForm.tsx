import { Heading, HStack } from '@chakra-ui/react'
import { ButtonComp } from 'shared/ButtonComp'

type SignFormProps = {
  handleSignIn: () => void
}

export const SignForm = ({ handleSignIn }: SignFormProps) => {
  return (
    <>
      <Heading>MyLook.best</Heading>
      <HStack
        align={'center'}
        border={'1px dashed'}
        p={'40px 80px'}
        spacing={'70px'}
      >
        <ButtonComp text={'Sign Up'} />
        <ButtonComp text={'Sign In'} onClick={handleSignIn} />
      </HStack>
    </>
  )
}
