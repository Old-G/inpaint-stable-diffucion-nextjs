'use client'

import React, { useEffect, useRef, useState } from 'react'
import { Box, Button, Flex, Icon, Image, Text } from '@chakra-ui/react'
import { ReactSketchCanvas } from 'react-sketch-canvas'
import { maskPrompt } from 'entities/redux/slices/maskPromptSlice'
import { useAppDispatch, useAppSelector } from 'entities/redux/store'
import { CanvasNavbar } from 'shared/CanvasNavbar'
import { reupIcon } from '../../../../public/assets/icons/reup-icon'
import { imagePrompt } from 'entities/redux/slices/imagePromptSlice'
import { resultPrompt } from 'entities/redux/slices/resultPromptSlice'

type CanvasProps = {
  canvasImage: Blob
  setCanvasImage: (image: any) => void
}

export function Canvas({ canvasImage, setCanvasImage }: CanvasProps) {
  const canvasRef = useRef<any>(null)
  const [predicting, setPredicting] = useState(false)
  const [lastPrediction, setLastPrediction] = useState(null)
  const [value, setValue] = useState(30)
  const [isEraser, setIsEraser] = useState(false)

  const dispatch = useAppDispatch()
  // const imageFilePrompt = useAppSelector((state) => state.imagePrompt.value)
  const result = useAppSelector((state) => state.resultPrompt.value)
  const deleteImage = useAppSelector((state) => state.isDeleteImage.value)

  async function clearCanvas() {
    await canvasRef?.current?.resetCanvas()
  }

  useEffect(() => {
    if (deleteImage) {
      clearCanvas()
      setCanvasImage(null)
    }
  }, [deleteImage])

  // useEffect(() => {
  //   const predictions = resultPrompt.map((prediction) => {
  //     prediction.lastImage = prediction.output
  //       ? prediction.output[prediction.output.length - 1]
  //       : null
  //     return prediction
  //   })

  //   setPredicting(predictions.some((prediction) => !prediction.output))
  //   setLastPrediction(predictions[predictions.length - 1])
  // }, [resultPrompt])

  const onChange = async () => {
    const paths = await canvasRef?.current?.exportPaths()

    if (paths.length) {
      const data = await canvasRef?.current?.exportImage('png')

      dispatch(maskPrompt(data))
    }
  }

  const handleActiveEraser = () => {
    setIsEraser(true)
  }

  const handelRedo = () => {
    canvasRef?.current?.redo()
  }

  const handelUndo = () => {
    canvasRef?.current?.undo()
  }

  const handleChangeImage = async () => {
    setCanvasImage(null)
    // setIsEraser(false)
    // setError(null);
  }

  return (
    <Box maxW={'725px'} w='100%'>
      <CanvasNavbar
        value={value}
        setValue={setValue}
        handleActiveEraser={handleActiveEraser}
        handelRedo={handelRedo}
        handelUndo={handelUndo}
      />
      <Flex
        position='relative'
        overflow='hidden'
        justify={'center'}
        align={'center'}
        h={'1020px'}
        border={'1px solid'}
        borderColor={'#D8246C'}
        borderRadius={'15px'}
        bgGradient={
          'linear-gradient(38.84deg, rgba(255, 141, 187, 0.351) 0%, rgba(255, 237, 199, 0.7) 100%)'
        }
        shadow={'0px 2px 10px rgba(0, 0, 0, 0.05)'}
      >
        {/* {!imageFilePrompt &&
        resultPrompt
          .filter((prediction) => prediction.output)
          .map((prediction, index) => (
            <Image
              alt={'prediction' + index}
              key={'prediction' + index}
              position='absolute'
              className='animate-in fade-in'
              style={{ zIndex: index }}
              src={prediction.lastImage}
            />
          ))} */}

        {canvasImage && (
          <Image
            src={URL.createObjectURL(canvasImage)}
            alt='preview image'
            m='auto 0'
          />
        )}

        {/* {predicting && (
        <Box
          position='absolute'
          top='50%'
          left='50%'
          transform='translate(-50%, -50%)'
          zIndex={resultPrompt.length + 100}
        >
          <Box
            p='4'
            w='40'
            bg='white'
            textAlign='center'
            borderRadius='lg'
            className='animate-in zoom-in'
          >
            <Spinner />
            <p className='pt-3 opacity-30 text-center text-sm'>
              {lastPrediction.status}
            </p>
          </Box>
        </Box>
        )} */}

        {(result?.length > 0 || canvasImage) && !predicting && (
          <Box
            position='absolute'
            top='0'
            left='0'
            w='100%'
            h='100%'
            zIndex={result.length + 100}
          >
            <Flex
              w='100%'
              h='100%'
              pointerEvents={isEraser ? 'unset' : 'none'}
              cursor={'url(/assets/icons/eraser-cursor.png), auto'}
            >
              <ReactSketchCanvas
                ref={canvasRef}
                strokeWidth={value}
                exportWithBackgroundImage
                // backgroundImage={URL.createObjectURL(canvasImage)}
                // eraserWidth={50}
                strokeColor='white'
                canvasColor='transparent'
                onChange={onChange}
              />
            </Flex>
            <Button
              bgColor={'white'}
              w='215px'
              h='27px'
              borderRadius={'20px'}
              border={'1px solid'}
              borderColor={'#E4E8F2'}
              position={'absolute'}
              zIndex={result?.length + 102}
              bottom={'10px'}
              right={'15px'}
              _hover={{ bgColor: '#FFD8DF' }}
              fontSize={'12px'}
              lineHeight={'15px'}
              fontWeight={500}
              textTransform={'uppercase'}
              rightIcon={<Icon as={() => reupIcon} />}
              onClick={handleChangeImage}
            >
              Upload another look
            </Button>

            {!isEraser && (
              <Flex
                direction={'column'}
                top='0'
                left='0'
                w='100%'
                h='100%'
                p='10px 15px'
                justify={'space-between'}
                position={'absolute'}
                bgColor={'#ffffffe6'}
                zIndex={resultPrompt?.length + 101}
              >
                <Flex
                  direction={'column'}
                  justify={'center'}
                  align={'center'}
                  w='100%'
                  h='100%'
                  fontSize={'30px'}
                  lineHeight={'40px'}
                  fontWeight={500}
                  color={'#696C7D'}
                >
                  <Flex align={'start'}>
                    <Text mr={'10px'}>Use eraser</Text>
                    <Image src={'/assets/icons/eraser-icon.png'} />
                    <Text ml={'10px'}>on any item of clothing</Text>
                  </Flex>
                  <Text> for a magical replacement</Text>
                </Flex>
              </Flex>
            )}
          </Box>
        )}
      </Flex>
    </Box>
  )
}
