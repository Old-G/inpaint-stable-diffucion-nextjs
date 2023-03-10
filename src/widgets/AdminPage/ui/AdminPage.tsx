/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/no-children-prop */
'use client'

import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Icon,
  Input,
  InputGroup,
  Text,
  Textarea,
  VStack,
} from '@chakra-ui/react'
import { starIcon } from '../../../../public/assets/icons/star-icon'
import { SetStateAction, useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { ButtonComp } from 'shared/ButtonComp'
import { SketchPicker } from 'react-color'

type Inputs = {
  color: string
  styles: string
}

export const AdminPage = () => {
  const [sketchPickerColor, setSketchPickerColor] = useState<any>()
  const [styles, setStyles] = useState('')
  const [stylesName, setStylesName] = useState('')

  // const { r, g, b, a } = sketchPickerColor

  // {
  //   r: 254,
  //   g: 223,
  //   b: 226,
  //   a: 1,
  // }

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<Inputs>()

  const {
    handleSubmit: handleSubmitStyle,
    formState: { isSubmitting: isSubmittingStyle },
  } = useForm<Inputs>()

  const onChangeStyleName = (e: {
    target: { value: SetStateAction<string> }
  }) => {
    setStylesName(e.target.value)
  }
  const onChangeStyle = (e: { target: { value: SetStateAction<string> } }) => {
    setStyles(e.target.value)
  }

  const onSubmitColor: SubmitHandler<Inputs> = async () => {
    const data = {
      color: sketchPickerColor,
    }
    return new Promise((res) => {
      setTimeout(() => {
        try {
          console.log(JSON.stringify(data, null, 2))
          setSketchPickerColor({ r: 254, g: 223, b: 226, a: 1 })
          // @ts-ignore
          res()
        } catch (error) {
          console.log(error)
        }
      }, 3000)
    })

    // const res = await fetch('', {
    //   method: 'POST',
    //   body: formData,
    // }).then((res) => res.json())
    // console.log(JSON.stringify(res, null, 4))

    // toast({
    //   title: 'Submitted!',
    //   status: 'success',
    //   duration: 3000,
    //   isClosable: true,
    //   position: 'top',
    // })
  }

  const onSubmitStyles: SubmitHandler<Inputs> = async () => {
    const data = {
      name: stylesName,
      style: styles,
    }
    return new Promise((res) => {
      setTimeout(() => {
        try {
          console.log(JSON.stringify(data, null, 2))
          setStyles('')
          setStylesName('')
          // @ts-ignore
          res()
        } catch (error) {
          console.log(error)
        }
      }, 3000)
    })

    // const res = await fetch('', {
    //   method: 'POST',
    //   body: formData,
    // }).then((res) => res.json())
    // console.log(JSON.stringify(res, null, 4))

    // toast({
    //   title: 'Submitted!',
    //   status: 'success',
    //   duration: 3000,
    //   isClosable: true,
    //   position: 'top',
    // })
  }

  return (
    <Flex
      direction={'column'}
      align={'center'}
      justify={'center'}
      maxW={'1280px'}
      w={'100%'}
      minH={'100vh'}
    >
      <Heading
        color={'#262C40'}
        fontSize={'64px'}
        lineHeight={'77px'}
        fontWeight={600}
        textTransform={'uppercase'}
        mb={'75px'}
      >
        Create your own colors and styles
      </Heading>
      <Flex w='100%' mb={'100px'}>
        <form onSubmit={handleSubmit(onSubmitColor)} style={{ width: '100%' }}>
          <VStack
            p='35px 25px'
            bgGradient={
              isSubmitting
                ? 'linear-gradient(38.84deg, rgba(255, 141, 187, 0.7) 35.42%, rgba(255, 189, 147, 0.7) 100%)'
                : 'linear-gradient(0deg, #FFFFFF, #FFFFFF), linear-gradient(38.84deg, rgba(255, 141, 187, 0.7) 35.42%, rgba(255, 211, 183, 0.7) 100%)'
            }
            border={'1px solid #EEEEF0'}
            borderRadius={'15px'}
            position={'relative'}
            mb={'30px'}
            shadow={'0px 2px 10px rgba(0, 0, 0, 0.05'}
          >
            <Text
              bgColor={'white'}
              border={'1px solid #D8246C'}
              borderRadius={'20px'}
              fontSize={'12px'}
              lineHeight={'15px'}
              fontWeight={500}
              textTransform={'uppercase'}
              shadow={'0px 2px 15px rgba(0, 0, 0, 0.05)'}
              position={'absolute'}
              top={'-12px'}
              left='50%'
              transform='translate(-50%, 0)'
              p='5px 28px'
              whiteSpace={'nowrap'}
            >
              {'Colors'}
            </Text>

            <FormControl w='100%'>
              <Flex mb={'20px'}>
                <Icon as={() => starIcon} />
              </Flex>

              <Flex>
                <SketchPicker
                  onChange={(color) => {
                    setSketchPickerColor(color)
                  }}
                  color={sketchPickerColor?.hex}
                />

                <Box
                  bgColor={`${sketchPickerColor?.hex}`}
                  w={'200px'}
                  h={'150px'}
                  border={'1px solid #D8246C'}
                  borderRadius={'5px'}
                  ml={'20px'}
                  mt={'10px'}
                />
              </Flex>
            </FormControl>
          </VStack>

          <Flex maxW={'300px'} justify={'center'} m={'0 auto'}>
            <ButtonComp
              disabled={!sketchPickerColor}
              text={'Add color'}
              active
              isLoading={isSubmitting}
            />
          </Flex>
        </form>
      </Flex>

      <Box w='100%' mb={'10px'}>
        <form
          onSubmit={handleSubmitStyle(onSubmitStyles)}
          style={{ width: '100%' }}
        >
          <VStack
            p='35px 25px'
            bgGradient={
              isSubmittingStyle
                ? 'linear-gradient(38.84deg, rgba(255, 141, 187, 0.7) 35.42%, rgba(255, 189, 147, 0.7) 100%)'
                : 'linear-gradient(0deg, #FFFFFF, #FFFFFF), linear-gradient(38.84deg, rgba(255, 141, 187, 0.7) 35.42%, rgba(255, 211, 183, 0.7) 100%)'
            }
            border={'1px solid #EEEEF0'}
            borderRadius={'15px'}
            position={'relative'}
            mb={'30px'}
            shadow={'0px 2px 10px rgba(0, 0, 0, 0.05'}
            w={'100%'}
            spacing={'30px'}
          >
            <Text
              bgColor={'white'}
              border={'1px solid #D8246C'}
              borderRadius={'20px'}
              fontSize={'12px'}
              lineHeight={'15px'}
              fontWeight={500}
              textTransform={'uppercase'}
              shadow={'0px 2px 15px rgba(0, 0, 0, 0.05)'}
              position={'absolute'}
              top={'-12px'}
              left='50%'
              transform='translate(-50%, 0)'
              p='5px 28px'
              whiteSpace={'nowrap'}
            >
              {'Styles'}
            </Text>

            <FormControl w={'100%'}>
              <Flex mb={'20px'}>
                <Icon as={() => starIcon} />
                <FormLabel htmlFor='style' ml={'10px'}>
                  Style name
                </FormLabel>
              </Flex>

              <Input
                id='style'
                value={stylesName}
                type={'text'}
                color={'#505A66'}
                bgColor={'white'}
                fontSize={'14px'}
                lineHeight={'17px'}
                fontWeight={600}
                shadow={'0px 2px 10px rgba(0, 0, 0, 0.05)'}
                onChange={(e) => onChangeStyleName(e)}
              />
            </FormControl>

            <FormControl w={'100%'}>
              <Flex mb={'20px'}>
                <Icon as={() => starIcon} />
              </Flex>
              <InputGroup>
                <Textarea
                  id='text'
                  value={styles}
                  color={'#505A66'}
                  bgColor={'white'}
                  fontSize={'14px'}
                  lineHeight={'17px'}
                  fontWeight={600}
                  shadow={'0px 2px 10px rgba(0, 0, 0, 0.05)'}
                  onChange={(e) => onChangeStyle(e)}
                  w={'100%'}
                />
              </InputGroup>
            </FormControl>
          </VStack>

          <Flex maxW={'300px'} w={'100%'} justify={'center'} m={'0 auto'}>
            <ButtonComp
              disabled={!styles || !stylesName}
              text={'Sign In'}
              active
              isLoading={isSubmittingStyle}
            />
          </Flex>
        </form>
      </Box>
    </Flex>
  )
}
