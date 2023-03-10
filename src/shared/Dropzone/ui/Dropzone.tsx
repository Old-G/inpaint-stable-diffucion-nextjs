'use client'

import { Box, Image, Text, VStack } from '@chakra-ui/react'
import { imagePrompt } from 'entities/redux/slices/imagePromptSlice'
import { isDeleteImage } from 'entities/redux/slices/isDeleteImageSlice'
import { isMakeMagic } from 'entities/redux/slices/isMakeMagicSlice'
import { useAppDispatch, useAppSelector } from 'entities/redux/store'
import React from 'react'
import { useDropzone } from 'react-dropzone'

type DropzoneProps = {
  canvasImage: Blob
  setCanvasImage: (image: Blob) => void
}

export function Dropzone({ canvasImage, setCanvasImage }: DropzoneProps) {
  const dispatch = useAppDispatch()
  const result = useAppSelector((state) => state?.resultPrompt?.value)

  const onDrop = async (acceptedFiles: any[]) => {
    const image = acceptedFiles?.[0]
    dispatch(isDeleteImage(false))

    // dispatch(imagePrompt(image))
    dispatch(isMakeMagic(false))
    setCanvasImage(image)
  }
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.png', '.jpg', '.jpeg'],
    },
  })

  if (result?.length) return null

  if (canvasImage) return null

  return (
    <Box
      zIndex='50'
      display='flex'
      w='full'
      h='full'
      color='gray.500'
      fontSize='sm'
      justifyContent='center'
      alignItems='center'
      cursor='pointer'
      userSelect='none'
      {...getRootProps()}
      position={'relative'}
    >
      <Box m='auto'>
        <input {...getInputProps()} />
        {isDragActive ? (
          <Text
            color={'#FF8DBB'}
            fontSize={'48px'}
            lineHeight={'58px'}
            fontWeight={500}
          >
            Drop the image here ...
          </Text>
        ) : (
          <VStack spacing={'0px'}>
            <Text
              color={'#FF8DBB'}
              fontSize={'48px'}
              lineHeight={'58px'}
              fontWeight={500}
            >
              drug & drop your
            </Text>
            <Text
              color={'#FF8DBB'}
              fontSize={'48px'}
              lineHeight={'58px'}
              fontWeight={500}
              textTransform={'uppercase'}
            >
              Full Body
            </Text>
            <Text
              color={'#FF8DBB'}
              fontSize={'48px'}
              lineHeight={'58px'}
              fontWeight={500}
            >
              portrait
            </Text>
          </VStack>
        )}
      </Box>
      <Image
        src={'/assets/images/girl-full-body.png'}
        position='absolute'
        top='50%'
        transform='translate(0, -50%)'
        right='100px'
      />

      <Text
        textTransform={'uppercase'}
        fontSize={'12px'}
        lineHeight={'15px'}
        fontWeight={500}
        bgColor={'white'}
        p='5px 35px'
        borderRadius={'20px'}
        border={'1px solid'}
        position='absolute'
        top='-15px'
        borderColor={'#E4E8F2'}
        left='50%'
        transform='translate(-50%, 0)'
      >
        Upload your first look
      </Text>
    </Box>
  )
}
