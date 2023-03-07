'use client'

import { Flex, Spinner, VStack } from '@chakra-ui/react'
import { Canvas } from 'widgets/Canvas'
import { Dropzone } from 'shared/Dropzone'
import { useAppDispatch, useAppSelector } from 'entities/redux/store'
import { prevPredictionOutput } from 'entities/redux/slices/prevPredictionOutputSlice'
import { useEffect, useState } from 'react'
import { imagePrompt } from 'entities/redux/slices/imagePromptSlice'

const MyLook = () => {
  const [canvasImage, setCanvasImage] = useState<any>(null)
  const dispatch = useAppDispatch()

  // const imageFilePrompt = useAppSelector((state) => state.imagePrompt.value)
  const resultPrompt = useAppSelector((state) => state.resultPrompt.value)
  // const textPrompt = useAppSelector((state) => state.Prompt.value)
  const colorPrompt = useAppSelector((state) => state.colorPrompt.value)
  const stylePrompt = useAppSelector((state) => state.stylePrompt.value)
  const maskPrompt = useAppSelector((state) => state.maskPrompt.value)

  const loading = useAppSelector((state) => state.isLoading.value)

  useEffect(() => {
    if (canvasImage) {
      dispatch(imagePrompt(canvasImage))
    }
  }, [canvasImage])

  if (loading) return <Spinner />

  return (
    <VStack
      w='calc(100vw - 340px)'
      h='100vh'
      justify={'center'}
      align='center'
      flexGrow={1}
    >
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
          <Dropzone canvasImage={canvasImage} setCanvasImage={setCanvasImage} />
        </Flex>
      ) : (
        <Canvas canvasImage={canvasImage} />
      )}

      {/* {((predictions.length > 0 &&
              predictions[predictions.length - 1].output) ||
              maskImage ||
              userUploadedImage) && (
              <button className="lil-button" onClick={startOver}>
                <StartOverIcon className="icon" />
                Start over
              </button>
            )} */}

      {resultPrompt.length > 0 &&
        resultPrompt?.map((item, index) => (
          <div key={index + 1}>
            <img
              src={`data:image/png;base64,${item?.result?.images?.[0]}`}
              alt={'image'}
            />
          </div>
        ))}
    </VStack>
  )
}
export default MyLook
