import { Button, Flex, Icon } from '@chakra-ui/react'
import { imagePrompt } from 'entities/redux/slices/imagePromptSlice'
import { isDeleteImage } from 'entities/redux/slices/isDeleteImageSlice'
import { maskPrompt } from 'entities/redux/slices/maskPromptSlice'
import { resultPrompt } from 'entities/redux/slices/resultPromptSlice'
import { useAppDispatch } from 'entities/redux/store'
import { addToIcon } from '../../../../public/assets/icons/add-to-icon'
import { downloadIcon } from '../../../../public/assets/icons/download-icon'
import { trashIcon } from '../../../../public/assets/icons/trash-icon'

export const CanvasFooter = () => {
  const dispatch = useAppDispatch()

  const handleDelete = () => {
    dispatch(resultPrompt([]))
    dispatch(isDeleteImage(true))
    dispatch(maskPrompt(null))
    dispatch(imagePrompt(null))
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
        onClick={handleDelete}
      >
        Delete
      </Button>
      <Button
        as={'a'}
        href='/images/myw3schoolsimage.jpg'
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
