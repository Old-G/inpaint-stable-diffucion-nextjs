import { Flex, Image, Text, VStack } from '@chakra-ui/react'
import Link from 'next/link'

export const NavBlock = () => {
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
        <Link href={'/my-look'}>
          <Image src={'/assets/icons/logo.svg'} alt='logo' cursor={'pointer'} />
        </Link>
        <Image
          src={'/assets/icons/close-icon.svg'}
          w='20px'
          h='20px'
          alt='close'
          cursor={'pointer'}
        />
      </Flex>
      <Flex
        pl='15px'
        cursor={'pointer'}
        bgColor={'white'}
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
      <Flex
        pl='15px'
        cursor={'pointer'}
        bgColor={'white'}
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
      <Flex
        pl='15px'
        cursor={'pointer'}
        bgColor={'white'}
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
          History
        </Text>
      </Flex>
    </VStack>
  )
}
