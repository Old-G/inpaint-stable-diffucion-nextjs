'use client'

import { Flex, Button, Icon, Image, Text } from '@chakra-ui/react'
import { SetStateAction } from 'react'
import { RangeSlider } from 'shared/RangeSlider'
import { redoIcon } from '../../../../public/assets/icons/redo-icon'
import { undoIcon } from '../../../../public/assets/icons/undo-icon'

type CanvasNavbarProps = {
  handleActiveEraser: () => void
  value: number
  setValue: (e: SetStateAction<number>) => void
  handelRedo: () => void
  handelUndo: () => void
}

export const CanvasNavbar = ({
  handleActiveEraser,
  value,
  setValue,
  handelRedo,
  handelUndo,
}: CanvasNavbarProps) => {
  return (
    <Flex
      maxW={'645px'}
      w='100%'
      justify={'space-between'}
      align={'center'}
      p='7px 30px'
      borderTopRadius={'15px'}
      bgGradient={
        'linear-gradient(180deg, rgba(254, 237, 198, 0.68) 5.73%, rgba(255, 183, 212, 0.68) 100%)'
      }
      m={'0 auto'}
    >
      <Flex align={'center'}>
        <Button
          fontSize={'20px'}
          lineHeight='24px'
          fontWeight={500}
          color={'#262C40'}
          rightIcon={<Icon as={() => redoIcon} />}
          bgColor={'transparent'}
          _hover={{
            bgGradient:
              'linear-gradient(180deg, rgba(254, 237, 198, 0.68) 5.73%, rgba(255, 183, 212, 0.68) 100%)',
          }}
          onClick={handelRedo}
        >
          Redo
        </Button>
        <Button
          fontSize={'20px'}
          lineHeight='24px'
          fontWeight={500}
          color={'#262C40'}
          rightIcon={<Icon as={() => undoIcon} />}
          bgColor={'transparent'}
          _hover={{
            bgGradient:
              'linear-gradient(180deg, rgba(254, 237, 198, 0.68) 5.73%, rgba(255, 183, 212, 0.68) 100%)',
          }}
          onClick={handelUndo}
        >
          Undo
        </Button>
      </Flex>
      <Image
        src={'/assets/icons/eraser-icon.png'}
        alt={'eraser icon'}
        justifySelf='center'
        bgColor={'white'}
        p='5px 25px'
        borderRadius='10px'
        cursor={'pointer'}
        onClick={handleActiveEraser}
      />
      <Flex justify={'end'}>
        <Text
          fontSize={'20px'}
          lineHeight='24px'
          fontWeight={500}
          color={'#262C40'}
          mr='15px'
        >
          Size
        </Text>
        <RangeSlider value={value} setValue={setValue} />
      </Flex>
    </Flex>
  )
}
