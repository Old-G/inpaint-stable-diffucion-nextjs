'use client'

import { Flex, Icon, Image, Text, VStack } from '@chakra-ui/react'
import { isSession } from 'entities/redux/slices/isSessionSlice'
import { useAppDispatch } from 'entities/redux/store'
import Link from 'next/link'
import { closeIcon } from '../../../../public/assets/icons/close-icon'

export const NavBlock = () => {
  const dispatch = useAppDispatch()

  const handleLogout = () => {
    dispatch(isSession(false))
  }

  return (
    <VStack
      bgColor={'white'}
      maxW='320px'
      w='100%'
      m='10px'
      align={'left'}
      spacing={'0px'}
      borderTopRadius='15px'
      borderBottomRadius='15px'
    >
      <Flex
        align={'center'}
        justify={'space-between'}
        p='15px'
        borderBottom={'0.5px solid'}
        borderColor={'gray.100'}
      >
        <Link href={'/'}>
          <Image src={'/assets/icons/logo.svg'} alt='logo' cursor={'pointer'} />
        </Link>
        <Flex
          justify={'center'}
          align={'center'}
          cursor={'pointer'}
          transition={'all .3s ease-in-out'}
          _hover={{ transform: 'scale(1.5)' }}
          onClick={handleLogout}
        >
          <Icon as={() => closeIcon()} />
        </Flex>
      </Flex>
      <Link href={'/my-account'}>
        <Flex
          pl='15px'
          cursor={'pointer'}
          bgColor={'white'}
          transition={'all .2s ease-in-out'}
          _hover={{ bgColor: '#FFE8DC' }}
          py='25px'
          borderBottom={'0.5px solid'}
          borderColor={'gray.100'}
        >
          <Text
            fontSize={'24px'}
            lineHeight={'29px'}
            color='#262c40'
            fontWeight={600}
          >
            My Account
          </Text>
        </Flex>
      </Link>
      <Link href={'/favorites'}>
        <Flex
          pl='15px'
          cursor={'pointer'}
          bgColor={'white'}
          transition={'all .2s ease-in-out'}
          _hover={{ bgColor: '#FFE8DC' }}
          py='25px'
          borderBottom={'0.5px solid'}
          borderColor={'gray.100'}
        >
          <Text
            fontSize={'24px'}
            lineHeight={'29px'}
            color='#262c40'
            fontWeight={600}
          >
            Favorites
          </Text>
        </Flex>
      </Link>
      <Link href={'/history'}>
        <Flex
          pl='15px'
          cursor={'pointer'}
          bgColor={'white'}
          transition={'all .2s ease-in-out'}
          _hover={{ bgColor: '#FFE8DC' }}
          py='25px'
          borderBottom={'0.5px solid'}
          borderColor={'gray.100'}
        >
          <Text
            fontSize={'24px'}
            lineHeight={'29px'}
            color='#262c40'
            fontWeight={600}
          >
            History
          </Text>
        </Flex>
      </Link>
      <Link href={'/admin'}>
        <Flex
          pl='15px'
          cursor={'pointer'}
          bgColor={'white'}
          transition={'all .2s ease-in-out'}
          _hover={{ bgColor: '#FFE8DC' }}
          py='25px'
          borderBottomRadius='15px'
        >
          <Text
            fontSize={'24px'}
            lineHeight={'29px'}
            color='#262c40'
            fontWeight={600}
          >
            Admin
          </Text>
        </Flex>
      </Link>
    </VStack>
  )
}
