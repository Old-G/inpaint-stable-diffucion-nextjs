'use client'

import {
  Box,
  Flex,
  Image,
  Progress,
  Spinner,
  useToast,
  VStack,
} from '@chakra-ui/react'
import { Canvas } from 'widgets/Canvas'
import { Dropzone } from 'shared/Dropzone'
import { useAppDispatch, useAppSelector } from 'entities/redux/store'
import { prevPredictionOutput } from 'entities/redux/slices/prevPredictionOutputSlice'
import { useEffect, useState } from 'react'
import { imagePrompt } from 'entities/redux/slices/imagePromptSlice'
import { CanvasFooter } from 'shared/CanvasFooter'
import { isMakeMagic } from 'entities/redux/slices/isMakeMagicSlice'

export const MyLookPage = () => {
  const [canvasImage, setCanvasImage] = useState<any>(null)
  const dispatch = useAppDispatch()
  const toast = useToast()

  const resultPrompt = useAppSelector((state) => state.resultPrompt.value)
  const imageFilePrompt = useAppSelector((state) => state.imagePrompt.value)
  const mask = useAppSelector((state) => state.maskPrompt.value)

  const loading = useAppSelector((state) => state.isLoading.value)

  useEffect(() => {
    // @ts-ignore
    if (imageFilePrompt && imageFilePrompt?.size / 1024 >= 1000) {
      toast({
        title: 'Image is too large',
        description: 'Please upload an image less than 1MB',
        status: 'error',
        duration: 9000,
        isClosable: true,
        position: 'top-right',
      })

      dispatch(isMakeMagic(true))
    } else {
      dispatch(isMakeMagic(false))
    }
  }, [imageFilePrompt])

  useEffect(() => {
    if (canvasImage) {
      dispatch(imagePrompt(canvasImage))
    }
  }, [canvasImage])

  return (
    <VStack
      w='calc(100vw - 340px)'
      h='100vh'
      justify={'center'}
      align='center'
      flexGrow={1}
    >
      {resultPrompt?.length > 0 ? (
        <>
          {resultPrompt?.length > 0 &&
            resultPrompt?.map(
              (item: { result: { images: any[] } }, index: number) => (
                <Flex
                  direction={'column'}
                  position='relative'
                  justify={'center'}
                  align={'center'}
                  overflow='hidden'
                  h={'710px'}
                  maxW={'500px'}
                  w='100%'
                  border={'1px solid'}
                  borderColor={'#D8246C'}
                  borderRadius={'15px'}
                  bgGradient={
                    'linear-gradient(38.84deg, rgba(255, 141, 187, 0.351) 0%, rgba(255, 237, 199, 0.7) 100%)'
                  }
                  shadow={'0px 2px 10px rgba(0, 0, 0, 0.05)'}
                  key={index + 1}
                >
                  <Box m='auto 0'>
                    <Image
                      src={`data:image/png;base64,${item?.result?.images?.[0]}`}
                      alt={'image'}
                    />
                  </Box>

                  <CanvasFooter />
                </Flex>
              )
            )}
          {resultPrompt?.map((item: { result: { images: any[] } }) => {
            item?.result?.images?.map((image, index) => (
              <Flex
                direction={'column'}
                position='relative'
                justify={'center'}
                align={'center'}
                overflow='hidden'
                h={'710px'}
                maxW={'500px'}
                w='100%'
                border={'1px solid'}
                borderColor={'#D8246C'}
                borderRadius={'15px'}
                bgGradient={
                  'linear-gradient(38.84deg, rgba(255, 141, 187, 0.351) 0%, rgba(255, 237, 199, 0.7) 100%)'
                }
                shadow={'0px 2px 10px rgba(0, 0, 0, 0.05)'}
                key={index + 1}
              >
                <Box m='auto 0'>
                  <Image src={`data:image/png;base64,${image}`} alt={'image'} />
                </Box>

                <CanvasFooter />
              </Flex>
            ))
          })}
        </>
      ) : (
        <>
          {!canvasImage ? (
            <Flex
              maxW={'1080px'}
              w='100%'
              h={'725px'}
              border={'1px dashed'}
              borderColor={'#FF8DBB'}
              borderRadius={'15px'}
              position='relative'
              bgGradient={
                'linear-gradient(38.84deg, rgba(255, 141, 187, 0.351) 0%, rgba(255, 237, 199, 0.7) 100%)'
              }
              shadow={'0px 2px 10px rgba(0, 0, 0, 0.05)'}
            >
              <Dropzone
                canvasImage={canvasImage}
                setCanvasImage={setCanvasImage}
              />
            </Flex>
          ) : (
            <Canvas canvasImage={canvasImage} setCanvasImage={setCanvasImage} />
          )}

          {loading && (
            <Flex
              position={'absolute'}
              w='calc(100vw + 340px)'
              h={'100%'}
              justify='center'
              align={'center'}
              bgColor={'#ffffffe6'}
              zIndex={'99999'}
            >
              <Progress hasStripe value={64} />
              <Spinner
                thickness='4px'
                speed='0.65s'
                emptyColor='gray.200'
                color='#FF8DBB'
                size='xl'
              />
            </Flex>
          )}
        </>
      )}
    </VStack>
  )
}
