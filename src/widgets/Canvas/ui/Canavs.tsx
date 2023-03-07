'use client'

// import React from 'react'
// import Image from 'next/image'
// import { ReactSketchCanvas } from 'react-sketch-canvas'
// import { Box, Spinner } from '@chakra-ui/react'

// export class Canvas extends React.Component {
//   constructor(props) {
//     super(props)

//     this.canvas = React.createRef()
//   }

//   onChange = async () => {
//     const paths = await this.canvas.current.exportPaths()

//     // only respond if there are paths to draw (don't want to send a blank canvas)
//     if (paths.length) {
//       const data = await this.canvas.current.exportImage('svg')
//       this.props.onDraw(data)
//     }
//   }

//   render() {
//     console.log(this.props.userUploadedImage);
//     const predictions = this.props.predictions.map((prediction) => {
//       prediction.lastImage = prediction.output
//         ? prediction.output[prediction.output.length - 1]
//         : null
//       return prediction
//     })

//     const predicting = predictions.some((prediction) => !prediction.output)
//     const lastPrediction = predictions[predictions.length - 1]

//     return (
//       <Box position='relative' w='100%' h='0' pt='100%' overflow='hidden'>
//         {/* PREDICTION IMAGES */}

//         {!this.props.userUploadedImage &&
//           predictions
//             .filter((prediction) => prediction.output)
//             .map((prediction, index) => (
//               <Image
//                 alt={'prediction' + index}
//                 key={'prediction' + index}
//                 // layout='fill'
//                 position='absolute'
//                 className='animate-in fade-in'
//                 style={{ zIndex: index }}
//                 src={prediction.lastImage}
//               />
//             ))}

//         {/* USER UPLOADED IMAGE */}
//         {this.props.userUploadedImage && (
//           <Image
//             src={URL.createObjectURL(this.props.userUploadedImage)}
//             alt='preview image'
//             // layout='fill'
//           />
//         )}

//         {/* SPINNER */}
//         {predicting && (
//           <Box
//             position='absolute'
//             top='50%'
//             left='50%'
//             transform='translate(-50%, -50%)'
//             zIndex={predictions.length + 100}
//           >
//             <Box
//               p='4'
//               w='40'
//               bg='white'
//               textAlign='center'
//               borderRadius='lg'
//               className='animate-in zoom-in'
//             >
//               <Spinner />
//               <p className='pt-3 opacity-30 text-center text-sm'>
//                 {lastPrediction.status}
//               </p>
//             </Box>
//           </Box>
//         )}

//         {(predictions.length > 0 || this.props.userUploadedImage) &&
//             <Box
//               position='absolute'
//               top='0'
//               left='0'
//               w='100%'
//               h='100%'
//               zIndex={predictions.length + 100}
//             >
//               <ReactSketchCanvas
//                 ref={this.canvas}
//                 strokeWidth={80}
//                 strokeColor='black'
//                 canvasColor='transparent'
//                 onChange={this.onChange}
//               />
//             </Box>
//           )}
//       </Box>
//     )
//   }
// }

import React, { useRef, useState, useEffect } from 'react'
import { Box, Button, Flex, Image, Spinner } from '@chakra-ui/react'
import { ReactSketchCanvas } from 'react-sketch-canvas'
import { maskPrompt } from 'entities/redux/slices/maskPromptSlice'
import { useAppDispatch, useAppSelector } from 'entities/redux/store'
import { RangeSlider } from 'shared/RangeSlider'

type CanvasProps = {
  canvasImage: Blob
}

export function Canvas({ canvasImage }: CanvasProps) {
  const canvasRef = useRef(null)
  const [predicting, setPredicting] = useState(false)
  const [lastPrediction, setLastPrediction] = useState(null)
  const [value, setValue] = useState(30)

  const dispatch = useAppDispatch()
  // const imageFilePrompt = useAppSelector((state) => state.imagePrompt.value)
  const resultPrompt = useAppSelector((state) => state.resultPrompt.value)

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
      const data = await canvasRef?.current?.exportImage('svg')

      dispatch(maskPrompt(data))
    }
  }

  return (
    <Box>
      <Flex>
        <Button>Redo</Button>
        <Button>Undo</Button>
        <Image src={'/assets/icons/eraser-icon.png'} alt={'eraser icon'} />
        <RangeSlider value={value} setValue={setValue} />
      </Flex>
      <Box
        position='relative'
        overflow='hidden'
        maxW={'725px'}
        w='100%'
        h={'1020px'}
        border={'1px solid'}
        borderColor={'#D8246C'}
        borderRadius={'15px'}
        bgGradient={
          'linear-gradient(38.84deg, rgba(255, 141, 187, 0.351) 0%, rgba(255, 237, 199, 0.7) 100%)'
        }
        shadow={'(0px 2px 10px rgba(0, 0, 0, 0.05))'}
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
          <Image src={URL.createObjectURL(canvasImage)} alt='preview image' />
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

        {(resultPrompt.length > 0 || canvasImage) && !predicting && (
          <Box
            position='absolute'
            top='0'
            left='0'
            w='100%'
            h='100%'
            zIndex={resultPrompt.length + 100}
            cursor={'url(/assets/icons/eraser-cursor.png), auto'}
          >
            <ReactSketchCanvas
              ref={canvasRef}
              strokeWidth={value}
              // eraserWidth={50}
              strokeColor='black'
              canvasColor='transparent'
              onChange={onChange}
            />
          </Box>
        )}
      </Box>
    </Box>
  )
}
