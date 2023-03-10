import {
  Flex,
  Heading,
  HStack,
  Image,
  Text,
  VStack,
  keyframes,
  Button,
  Box,
  Link,
} from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { ButtonComp } from 'shared/ButtonComp'

type SignFormProps = {
  handleSignIn: () => void
  handleSignUp: () => void
  handleForgotPassword: () => void
  isSignForm: boolean
}

export const SignForm = ({
  handleSignIn,
  isSignForm,
  handleSignUp,
  handleForgotPassword,
}: SignFormProps) => {
  const [isHovering, setIsHovering] = useState(false)
  const [isH3, setIsH3] = useState(false)
  const [isH1, setIsH1] = useState(false)
  const [isH2, setIsH2] = useState(false)
  const [isH2Second, setIsH2Second] = useState(false)
  const [isAnimation, setIsAnimation] = useState(false)

  const handleMouseOver = () => {
    setIsHovering(true)
  }

  const handleMouseOut = () => {
    setIsHovering(false)
  }

  useEffect(() => {
    const startH3 = setTimeout(() => setIsH3(true), 300)
    return () => clearTimeout(startH3)
  }, [])

  useEffect(() => {
    const startH3 = setTimeout(() => setIsH1(true), 1000)
    return () => clearTimeout(startH3)
  }, [])

  useEffect(() => {
    const startH2 = setTimeout(() => setIsH2(true), 1700)
    return () => clearTimeout(startH2)
  }, [])

  useEffect(() => {
    const startH2Second = setTimeout(() => setIsH2Second(true), 2300)
    return () => clearTimeout(startH2Second)
  }, [])

  useEffect(() => {
    const startAnimation = setTimeout(() => setIsAnimation(true), 2700)
    return () => clearTimeout(startAnimation)
  }, [])

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
      <VStack
        // align={isAnimation ? 'flex-end' : 'center'}
        // transform={isAnimation ? 'translateX(0%)' : 'translateX(-50%)'}

        transition={'all 1s ease-in'}
        mr={'50px'}
        spacing={'30px'}
      >
        <Flex w={'100%'} justify={'end'}>
          <Box>
            <Heading
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
              opacity={isH3 ? 1 : 0}
              w={'215px'}
              textAlign={'center'}
              whiteSpace={'nowrap'}
              transition={'all 0.5s ease-in'}
            >
              Our goal is simple
            </Heading>
          </Box>
        </Flex>
        <Flex w={'100%'} justify={'end'}>
          <Heading
            as={'h1'}
            color={'#262C40'}
            fontSize={'64px'}
            lineHeight={'77px'}
            fontWeight={600}
            opacity={isH1 ? 1 : 0}
            w={isAnimation ? '610px' : '100%'}
            textAlign={'center'}
            whiteSpace={'nowrap'}
            transition={'all 0.8s ease-in'}
          >
            Helping you to Create
          </Heading>
        </Flex>
        <Flex w={'100%'} justify={'end'}>
          <Heading
            as={'h2'}
            bgGradient={
              'linear-gradient(90deg, #DB74FF 21.04%, #FF8E8E 53.02%, #D8246C 87.51%)'
            }
            bgClip={'text'}
            fontSize={'64px'}
            lineHeight={'77px'}
            fontWeight={600}
            opacity={isH2 ? 1 : 0}
            w={isAnimation ? '430px' : '100%'}
            textAlign={'center'}
            whiteSpace={'nowrap'}
            transition={'all 0.8s ease-in'}
          >
            Your Best Look
          </Heading>
        </Flex>
        <Flex w={'100%'} justify={'end'}>
          <Heading
            as={'h2'}
            bgGradient={
              'linear-gradient(90deg, #FF8DBB 40.74%, #FFBD93 58.86%)'
            }
            bgClip={'text'}
            fontSize={'64px'}
            lineHeight={'77px'}
            fontWeight={600}
            opacity={isH2Second ? 1 : 0}
            w={isAnimation ? '260px' : '100%'}
            textAlign={'center'}
            whiteSpace={'nowrap'}
            transition={'all 0.8s ease-in'}
          >
            out NOW
          </Heading>
        </Flex>
        <HStack align={''} pt={'0px'} spacing={'70px'}>
          <ButtonComp
            text={'Sign Up'}
            active
            uppercase
            height={'32px'}
            onClick={handleSignUp}
          />

          <Flex direction={'column'} position={'relative'}>
            <ButtonComp
              text={'Sign In'}
              uppercase
              height={'32px'}
              onClick={handleSignIn}
              borderCCC
            />

            <Flex
              align={'center'}
              position={'absolute'}
              bottom={'-35px'}
              left={'30px'}
            >
              <Flex align={'center'} position='relative'>
                <Text
                  fontSize={'16px'}
                  lineHeight={'19px'}
                  fontWeight={500}
                  color={'#696C7D'}
                  mr={'5px'}
                >
                  Forgot password?
                </Text>
                <Text
                  cursor={'pointer'}
                  fontSize={'16px'}
                  lineHeight={'19px'}
                  fontWeight={500}
                  color={'#D8246C'}
                  _hover={{ textDecoration: 'none' }}
                  onMouseOver={handleMouseOver}
                  onMouseOut={handleMouseOut}
                  onClick={handleForgotPassword}
                >
                  Click here
                </Text>

                <Image
                  src={'/assets/icons/cat-left-icon.png'}
                  alt='cat'
                  position={'absolute'}
                  top={'30px'}
                  right={'35px'}
                  opacity={isHovering ? 1 : 0}
                  transition={'opacity 0.3s ease-in-out'}
                />
              </Flex>
            </Flex>
          </Flex>
        </HStack>
      </VStack>

      <Image src={'/assets/images/girl-ok.png'} alt='girl' />
    </Flex>
  )
}
