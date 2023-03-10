'use client'

import {
  Flex,
  Progress,
  Spinner,
  useToast,
  VStack,
  Wrap,
} from '@chakra-ui/react'
import { Canvas } from 'widgets/Canvas'
import { Dropzone } from 'shared/Dropzone'
import { useAppDispatch, useAppSelector } from 'entities/redux/store'
import { useEffect, useState } from 'react'
import { imagePrompt } from 'entities/redux/slices/imagePromptSlice'
import { isMakeMagic } from 'entities/redux/slices/isMakeMagicSlice'
import { maskPrompt } from 'entities/redux/slices/maskPromptSlice'
import { GeneratedCard } from 'shared/GeneratedCard'

export const MyLookPage = () => {
  const [canvasImage, setCanvasImage] = useState<any>('')
  const [canvasImageMask, setCanvasImageMask] = useState<any>('')
  const dispatch = useAppDispatch()
  const toast = useToast()

  const result = useAppSelector((state) => state?.resultPrompt?.value)

  console.log(result)

  const loading = useAppSelector((state) => state?.isLoading?.value)

  useEffect(() => {
    // @ts-ignore
    if (canvasImage && canvasImage?.size / 1024 >= 1000) {
      toast({
        title: 'Image is too large',
        description: 'Please upload an image less than 1MB',
        status: 'error',
        duration: 9000,
        isClosable: true,
        position: 'top-right',
      })

      dispatch(isMakeMagic(true))
    }
  }, [canvasImage, dispatch, toast])

  useEffect(() => {
    if (canvasImage) {
      dispatch(imagePrompt(canvasImage))
    }
    if (canvasImageMask) {
      dispatch(maskPrompt(canvasImageMask))
    }
  }, [canvasImage, canvasImageMask, dispatch])

  // const handleDelete = (idx: number) => {
  //   const filteredItems = result?.filter((item: number) => item !== idx)
  //   dispatch(resultPrompt(filteredItems))
  //   console.log(filteredItems)

  //   // dispatch(resultPrompt([]))
  //   dispatch(isDeleteImage(true))
  //   dispatch(maskPrompt(''))
  //   dispatch(imagePrompt(''))
  // }

  return (
    <VStack
      w='calc(100vw - 340px)'
      minH='100vh'
      justify={'center'}
      align='center'
      flexGrow={1}
    >
      {result?.length ? (
        <Wrap
          w={'100%'}
          h={'100%'}
          spacing={'15px'}
          p={'30px'}
          align={'center'}
          justifySelf={'flex-start'}
        >
          {result?.map((item: { result: { images: any[] } }, idx: number) => (
            <Flex key={idx}>
              {item?.result?.images?.map((item, index) => (
                <GeneratedCard
                  key={index}
                  idx={idx}
                  image={item}
                  // handleDelete={handleDelete}
                />
              ))}
            </Flex>
          ))}
        </Wrap>
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
            <Canvas
              canvasImage={canvasImage}
              setCanvasImageMask={setCanvasImageMask}
            />
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
