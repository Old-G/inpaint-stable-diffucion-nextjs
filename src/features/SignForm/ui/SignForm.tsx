import {
  Flex,
  Heading,
  HStack,
  Image,
  Text,
  VStack,
  keyframes,
  Button,
} from '@chakra-ui/react'

type SignFormProps = {
  handleSignIn: () => void
  handleSignUp: () => void
  isSignForm: boolean
}

export const SignForm = ({
  handleSignIn,
  isSignForm,
  handleSignUp,
}: SignFormProps) => {
  return (
    <Flex
      align={'center'}
      justify={'center'}
      w={'100%'}
      h={'100vh'}
      bgImage={
        isSignForm
          ? 'url(/assets/images/wave-heart-line-bg-first.png)'
          : undefined
      }
      bgRepeat={'no-repeat'}
      bgSize={'cover'}
    >
      <VStack align={'flex-end'} mr={'50px'}>
        <Text
          as={'h3'}
          color={'#262C40'}
          fontSize={'16px'}
          lineHeight={'19px'}
          fontWeight={500}
          p='6.5px 27px'
          bgColor={'white'}
          borderRadius={'19px'}
          shadow={'0px 2px 10px rgba(0, 0, 0, 0.05)'}
          textTransform={'uppercase'}
        >
          Our goal is simple
        </Text>
        <Heading
          as={'h1'}
          color={'#262C40'}
          fontSize={'64px'}
          lineHeight={'77px'}
          fontWeight={600}
        >
          Helping you to Create
        </Heading>
        <Text
          as={'h2'}
          bgGradient={
            'linear-gradient(90deg, #DB74FF 21.04%, #FF8E8E 53.02%, #D8246C 87.51%)'
          }
          bgClip={'text'}
          fontSize={'64px'}
          lineHeight={'77px'}
          fontWeight={600}
        >
          Your Best Look
        </Text>
        <Text
          as={'h2'}
          bgGradient={'linear-gradient(90deg, #FF8DBB 40.74%, #FFBD93 58.86%)'}
          bgClip={'text'}
          fontSize={'64px'}
          lineHeight={'77px'}
          fontWeight={600}
        >
          out NOW
        </Text>
        <HStack align={'center'} p={'40px 80px'} spacing={'70px'}>
          <Button
            bgColor={'#D8246C'}
            color={'white'}
            p={'0px 105px'}
            h='32px'
            border={'1px solid #cccccc'}
            borderRadius={'5px'}
            fontSize={'16px'}
            lineHeight={'19px'}
            fontWeight={500}
            textTransform={'uppercase'}
            onClick={handleSignUp}
            transition='all .2s ease-in-out'
            _hover={{ bgColor: '#D8246C', transform: 'scale(1.1)' }}
          >
            Sign Up
          </Button>
          <Button
            bgColor={'white'}
            color={'#262C40'}
            p={'0px 105px'}
            h='32px'
            border={'1px solid #cccccc'}
            borderRadius={'5px'}
            fontSize={'16px'}
            lineHeight={'19px'}
            fontWeight={500}
            textTransform={'uppercase'}
            onClick={handleSignIn}
            transition='all .2s ease-in-out'
            _hover={{ bgColor: '#ffffff', transform: 'scale(1.1)' }}
          >
            Sign In
          </Button>
        </HStack>
      </VStack>

      <Image src={'/assets/images/girl-ok.png'} alt='girl' />
    </Flex>
  )
}
