import { Flex, Text } from '@chakra-ui/react'

export const TooltipConfirmPasswordText = () => {
  return (
    <Flex direction={'column'} position={'relative'} p={'16px 25px 16px 16px'}>
      <Text
        color={'black'}
        fontSize={'10px'}
        lineHeight={'16px'}
        fontWeight={500}
      >
        The passwords do not match
      </Text>
    </Flex>
  )
}
