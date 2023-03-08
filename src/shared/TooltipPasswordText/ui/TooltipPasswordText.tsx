import { Flex, Icon, Image, Text } from '@chakra-ui/react'
import { infoBullitIcon } from '../../../../public/assets/icons/info-bullt-icon'

export const TooltipPasswordText = () => {
  return (
    <Flex direction={'column'} position={'relative'} p={'16px 25px 16px 16px'}>
      <Text
        color={'black'}
        fontSize={'10px'}
        lineHeight={'16px'}
        fontWeight={500}
      >
        At least 8 characters with:
      </Text>
      <Flex align={'center'} ml={'3px'}>
        <Icon as={() => infoBullitIcon} />
        <Text
          color={'black'}
          fontSize={'10px'}
          lineHeight={'16px'}
          fontWeight={500}
          ml={'3px'}
        >
          1 digit (1,2,3...)
        </Text>
      </Flex>
      <Flex align={'center'} ml={'3px'}>
        <Icon as={() => infoBullitIcon} />
        <Text
          color={'black'}
          fontSize={'10px'}
          lineHeight={'16px'}
          fontWeight={500}
          ml={'3px'}
        >
          1 capital letter (A,B,C)
        </Text>
      </Flex>
      <Flex align={'center'} ml={'3px'}>
        <Icon as={() => infoBullitIcon} />
        <Text
          color={'black'}
          fontSize={'10px'}
          lineHeight={'16px'}
          fontWeight={500}
          ml={'3px'}
        >
          1 lowercase letter (a,b,c)
        </Text>
      </Flex>
      <Flex align={'center'} ml={'3px'}>
        <Icon as={() => infoBullitIcon} />
        <Text
          color={'black'}
          fontSize={'10px'}
          lineHeight={'16px'}
          fontWeight={500}
          ml={'3px'}
        >
          1 spec symbol ($,%,@,#)
        </Text>
      </Flex>

      <Image
        src={'/assets/icons/cat-icon.png'}
        alt='cat'
        position={'absolute'}
        right={'-8px'}
      />
    </Flex>
  )
}
