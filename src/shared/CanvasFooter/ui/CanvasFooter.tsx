'use client'

import { Button, Flex, Icon } from '@chakra-ui/react'
import { imagePrompt } from 'entities/redux/slices/imagePromptSlice'
import { isDeleteImage } from 'entities/redux/slices/isDeleteImageSlice'
import { maskPrompt } from 'entities/redux/slices/maskPromptSlice'
import {
  removeItem,
  resultPrompt,
} from 'entities/redux/slices/resultPromptSlice'
import { useAppDispatch, useAppSelector } from 'entities/redux/store'
import { addToIcon } from '../../../../public/assets/icons/add-to-icon'
import { downloadIcon } from '../../../../public/assets/icons/download-icon'
import { trashIcon } from '../../../../public/assets/icons/trash-icon'

type CanvasFooterProps = {
  idx: number
  image: string
}

export const CanvasFooter = ({ idx, image }: CanvasFooterProps) => {
  const dispatch = useAppDispatch()

  const result = useAppSelector((state) => state?.resultPrompt?.value)

  const handleDelete = (idx: number) => {
    console.log(idx)

    // const filteredItems = result?.filter((item: number) => item !== idx)
    // const qq = result.splice(
    //   result.findIndex((arrow) => arrow.id === action.payload),
    //   1
    // )
    dispatch(removeItem(idx))
    // console.log(qq)

    // dispatch(resultPrompt([]))
    dispatch(isDeleteImage(true))
    dispatch(maskPrompt(''))
    dispatch(imagePrompt(''))
  }
  return (
    <Flex
      position={'absolute'}
      bottom={'0px'}
      justify={'space-between'}
      align={'center'}
      maxW={'410px'}
      w={'100%'}
      h={'60px'}
      bgGradient={
        'linear-gradient(180deg, rgba(254, 237, 198, 0.68) 5.73%, rgba(255, 183, 212, 0.68) 100%)'
      }
      shadow={'0px 2px 10px rgba(0, 0, 0, 0.05)'}
      borderTopRadius={'15px'}
    >
      <Button
        color={'#262C40'}
        fontSize={'20px'}
        lineHeight={'24px'}
        fontWeight={500}
        bgColor={'transparent'}
        _hover={{
          bgGradient:
            'linear-gradient(180deg, rgba(254, 237, 198, 0.68) 5.73%, rgba(255, 183, 212, 0.68) 100%)',
        }}
        rightIcon={<Icon as={() => trashIcon} />}
        onClick={() => handleDelete(idx)}
      >
        Delete
      </Button>
      <Button
        as={'a'}
        href={`data:image/png;base64,${image}`}
        download
        color={'#262C40'}
        fontSize={'20px'}
        lineHeight={'24px'}
        fontWeight={500}
        bgColor={'transparent'}
        _hover={{
          bgGradient:
            'linear-gradient(180deg, rgba(254, 237, 198, 0.68) 5.73%, rgba(255, 183, 212, 0.68) 100%)',
        }}
        rightIcon={<Icon as={() => downloadIcon} />}
      >
        Save
      </Button>
      <Button
        color={'#262C40'}
        fontSize={'20px'}
        lineHeight={'24px'}
        fontWeight={500}
        bgColor={'transparent'}
        _hover={{
          bgGradient:
            'linear-gradient(180deg, rgba(254, 237, 198, 0.68) 5.73%, rgba(255, 183, 212, 0.68) 100%)',
        }}
        rightIcon={<Icon as={() => addToIcon} />}
      >
        Add to
      </Button>
    </Flex>
  )
}
