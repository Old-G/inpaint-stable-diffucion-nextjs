/* eslint-disable react/no-children-prop */
'use client'

import { ChevronRightIcon } from '@chakra-ui/icons'
import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Icon,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
  useToast,
  VStack,
  Wrap,
} from '@chakra-ui/react'
import { convertToBase64 } from 'entities/lib/convertToBase64'
import { fetchBody } from 'entities/lib/fetchBody'
import { fetchToApiNext } from 'entities/lib/fetchToApiNext'
import { imagePrompt } from 'entities/redux/slices/imagePromptSlice'
import { isLoading } from 'entities/redux/slices/isLoadingSlice'
import { isMakeMagic } from 'entities/redux/slices/isMakeMagicSlice'
import { maskPrompt } from 'entities/redux/slices/maskPromptSlice'
import { resultPrompt } from 'entities/redux/slices/resultPromptSlice'
import { useAppDispatch, useAppSelector } from 'entities/redux/store'
import { useCallback, useEffect, useState } from 'react'
import { PalletColor } from 'shared/PalletColor'
import { PalletStyle } from 'shared/PalletStyle'
import { magicWandIcon } from '../../../../public/assets/icons/magic-wand-icon'
import { textIcon } from '../../../../public/assets/icons/text-input-icon'

type PalletBlockProps = {
  colors: {
    id: string
    color: string
  }[]
  styles: {
    id: string
    style: string
  }[]
}

const url = process.env.NEXT_PUBLIC_API_PREDICTS_URL_LOCAL

export const PalletBlock = ({ colors, styles }: PalletBlockProps) => {
  const [colorId, setColorId] = useState(9)
  const [styleId, setStyleId] = useState(9)
  const [inputText, setInputText] = useState('')
  const [color, setColor] = useState('')
  const [stylesChoose, setStylesChoose] = useState('')
  const [showImagePreview, setShowImagePreview] = useState(false)
  const [imagePreview, setImagePreview] = useState<string | unknown>('')
  const [imagePreviewMask, setImagePreviewMask] = useState<string | unknown>('')

  const toast = useToast()

  const dispatch = useAppDispatch()

  const imageFilePrompt = useAppSelector((state) => state?.imagePrompt?.value)
  const mask = useAppSelector((state) => state?.maskPrompt?.value)
  const isMagic = useAppSelector((state) => state?.isMakeMagic?.value)
  const isDelete = useAppSelector((state) => state?.isDeleteImage?.value)

  const handleScrollColors = () => {
    colors?.map((color) => {
      if (color?.id === '8') {
        setColorId(colorId + 1)
        const div = document.getElementById(`${colorId}`)

        div?.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
        })
      }
    })
  }

  const handleScrollStyles = () => {
    styles?.map((style) => {
      if (style.id === '8') {
        setStyleId(styleId + 1)
        const div = document.getElementById(`${styleId}`)
        console.log(div)

        div?.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
        })
      }
    })
  }

  const onChangeTextPrompt = (e: any) => {
    const text = e.target.value
    setInputText(text)
  }

  const sendPrompt = useCallback(async () => {
    try {
      // const body = await fetchBody(image, inputText, stylesChoose, color, mask)
      const image = await convertToBase64(imageFilePrompt)

      const data = await fetch(`${url}`, {
        method: 'POST',
        body: JSON.stringify({
          init_images: [`${image ? image : mask}`],
          prompt: `${inputText} ${
            color && 'color' + ' ' + color
          } ${stylesChoose}`,
          // styles: [`${stylesChoose}`],
          batch_size: 4,
          // batch_count: 4,
          mask: `${mask}`,
          init_img_with_mask: [`${image}`, `${mask}`],
          // mode: 2,
          // n_iter: 1,
          // script_args: [{ batch_size: 4 }],
        }),
        headers: {
          'content-type': 'application/json',
        },
      })

      const res = await data?.json()

      if (res.message) {
        dispatch(isLoading(false))
        dispatch(resultPrompt(res.result))

        toast({
          title: 'Success',
          status: 'success',
          duration: 5000,
          isClosable: true,
          position: 'top-right',
        })
      }
    } catch (error) {
      console.log({ error })
      dispatch(isLoading(false))

      toast({
        title: 'Error',
        description:
          'Something went wrong! Please try again or reload the page',
        status: 'error',
        duration: 5000,
        isClosable: true,
        position: 'top-right',
      })
    }
  }, [imageFilePrompt, mask, inputText, color, stylesChoose, dispatch, toast])

  const addPrompt = async (e: { preventDefault: () => void }) => {
    e.preventDefault()
    sendPrompt()
    dispatch(imagePrompt(''))
    dispatch(maskPrompt(''))
    setInputText('')
    dispatch(isLoading(true))
    setShowImagePreview(true)
    const img = await convertToBase64(imageFilePrompt)
    setImagePreview(img)
    setImagePreviewMask(mask)
    dispatch(isMakeMagic(true))
  }

  return (
    <VStack
      bgColor={'white'}
      maxW='320px'
      w='100%'
      m='10px'
      align={'left'}
      spacing={'0px'}
      border={'1px solid'}
      borderColor={'#FF8DBB'}
      borderTopRadius='15px'
      borderBottomRadius='15px'
      py={'25px'}
      position={'relative'}
    >
      <Flex
        direction={'column'}
        borderBottom={'0.5px solid'}
        borderColor='gray.100'
        px='14px'
        pb={'25px'}
        mb={'20px'}
      >
        <Heading
          as='h2'
          fontSize={'24px'}
          lineHeight={'29px'}
          textTransform={'uppercase'}
          mb='25px'
        >
          Color
        </Heading>
        <Flex alignSelf={'left'} align={'center'} position='relative'>
          <Flex
            w='280px'
            overflow='scroll'
            sx={{
              '::-webkit-scrollbar': {
                display: 'none',
              },
            }}
            scrollBehavior={'smooth'}
          >
            <HStack spacing={'10px'}>
              {colors?.map(({ id, color }) => (
                <PalletColor
                  key={id}
                  id={id}
                  color={color}
                  setColor={setColor}
                />
              ))}
            </HStack>
            <Icon
              as={ChevronRightIcon}
              cursor='pointer'
              position={'absolute'}
              right={'-10px'}
              top={'5px'}
              onClick={handleScrollColors}
            />
          </Flex>
        </Flex>
      </Flex>
      <Flex
        direction={'column'}
        borderBottom={'0.5px solid'}
        borderColor='gray.100'
        px='14px'
        pb={'25px'}
        mb={'20px'}
      >
        <Heading
          as='h2'
          fontSize={'24px'}
          lineHeight={'29px'}
          textTransform={'uppercase'}
          mb='25px'
        >
          Style
        </Heading>

        <Flex align={'center'}>
          <Flex
            overflow='scroll'
            sx={{
              '::-webkit-scrollbar': {
                display: 'none',
              },
            }}
            scrollBehavior={'smooth'}
          >
            <Flex>
              <Wrap minW='500px' overflowX='hidden'>
                {styles?.map(({ id, style }) => (
                  <PalletStyle
                    key={id}
                    id={id}
                    style={style}
                    setStylesChoose={setStylesChoose}
                  />
                ))}
              </Wrap>
            </Flex>
          </Flex>
          <Icon
            as={ChevronRightIcon}
            cursor='pointer'
            onClick={handleScrollStyles}
          />
        </Flex>
      </Flex>
      <Flex
        direction={'column'}
        align={'center'}
        px='14px'
        pb={'25px'}
        pt='25px'
        mb={'10px'}
      >
        <Heading
          as='h2'
          fontSize={'24px'}
          lineHeight={'29px'}
          textTransform={'uppercase'}
          mb='25px'
          alignSelf={'flex-start'}
        >
          Idea
        </Heading>

        <InputGroup>
          <InputLeftElement
            pointerEvents='none'
            children={<Icon as={() => textIcon} color='gray.300' />}
          />
          <Input
            onChange={onChangeTextPrompt}
            value={inputText}
            id='text'
            type='text'
            placeholder='Text your outfit idea here'
            fontSize={'13px'}
            lineHeight={'16px'}
            fontWeight={600}
            _placeholder={{ color: '#A0A0A0' }}
            color={'#262C40'}
            _focus={{ borderColor: '#FF8DBB' }}
            _active={{ borderColor: '#FF8DBB' }}
          />
        </InputGroup>

        {showImagePreview && !isDelete && (
          <Box position='relative' mt={'30px'}>
            <Image
              src={`${imagePreview}`}
              alt={'preview image'}
              w={'120px'}
              h={'166px'}
              border={'1px solid'}
              borderColor={'#D8246C'}
              borderRadius={'15px'}
              alignSelf={'center'}
            />
            <Image
              src={`${imagePreviewMask}`}
              alt={'preview image'}
              w={'120px'}
              h={'166px'}
              borderRadius={'15px'}
              alignSelf={'center'}
              position='absolute'
              top={'0px'}
              left={'0px'}
            />
          </Box>
        )}
      </Flex>

      <Flex
        justify={'center'}
        align={'center'}
        border={'1px solid'}
        borderColor={'#FF8DBB'}
        p={'5px 28px'}
        position='absolute'
        borderRadius={'20px'}
        top={'-12px'}
        left='50%'
        transform='translate(-50%, 0)'
        bgColor={'white'}
      >
        <Text
          color={'#D8246C'}
          textTransform={'uppercase'}
          fontSize={'12px'}
          lineHeight={'15px'}
        >
          Filter pallet
        </Text>
      </Flex>

      <Button
        shadow={'0px 2px 10px rgba(0, 0, 0, 0.2)'}
        p={'0px 28px'}
        h={'27px'}
        position='absolute'
        borderRadius={'20px'}
        bottom={'-12px'}
        left='50%'
        transform='translate(-50%, 0)'
        bgColor={'#D8246C'}
        color={'white'}
        rightIcon={<Icon as={() => magicWandIcon} />}
        _hover={{ bgColor: '#ea2675' }}
        textTransform={'uppercase'}
        fontSize={'12px'}
        lineHeight={'15px'}
        onClick={addPrompt}
        isDisabled={isMagic}
      >
        Make Magic
      </Button>
    </VStack>
  )
}
