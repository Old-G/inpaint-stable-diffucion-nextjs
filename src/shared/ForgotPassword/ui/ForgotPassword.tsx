/* eslint-disable react/no-children-prop */
/* eslint-disable react/no-unescaped-entities */
import {
  Flex,
  Heading,
  VStack,
  FormControl,
  Icon,
  FormLabel,
  Tooltip,
  InputGroup,
  InputLeftElement,
  Input,
  InputRightElement,
  Button,
  Text,
  Image,
} from '@chakra-ui/react'
import debounce from 'debounce'
import { isSession } from 'entities/redux/slices/isSessionSlice'
import { useAppDispatch } from 'entities/redux/store'
import { doneIcon } from '../../../../public/assets/icons/done-icon'
import { emailIcon } from '../../../../public/assets/icons/email-icon'
import { infoIcon } from '../../../../public/assets/icons/info-icon'
import { starIcon } from '../../../../public/assets/icons/star-icon'

import { useForm, SubmitHandler } from 'react-hook-form'
import { TooltipEmailText } from 'shared/TooltipEmailText'
import { ButtonComp } from 'shared/ButtonComp'

type Inputs = {
  email: string
  password: string
  required: string
}

type ForgotPasswordProps = {
  handleResetPassword: () => void
}

export const ForgotPassword = ({
  handleResetPassword,
}: ForgotPasswordProps) => {
  const dispatch = useAppDispatch()

  const {
    handleSubmit,
    register,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<Inputs>()

  const watchEmail = watch('email')

  const onChangeEmail = () => {
    debounce(() => {
      watch('email')
    }, 300)
  }

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    return new Promise((res) => {
      setTimeout(() => {
        try {
          console.log(JSON.stringify(data, null, 2))
          dispatch(isSession(false))
          handleResetPassword()
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
      // maxW={'365px'}
      // w={'100%'}
      h={'100vh'}
    >
      <Heading
        color={'#262C40'}
        fontSize={'64px'}
        lineHeight={'77px'}
        fontWeight={600}
        textTransform={'uppercase'}
        mb={'75px'}
      >
        Forgot Password
      </Heading>
      <Flex maxW={'365px'} w='100%' mb={'10px'}>
        <form onSubmit={handleSubmit(onSubmit)} style={{ width: '100%' }}>
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
              {'Email to recover'}
            </Text>

            <FormControl isInvalid={!!errors.email} w='100%'>
              <Flex>
                <Icon as={() => starIcon} />
                <FormLabel htmlFor='email' ml={'10px'}>
                  Email
                </FormLabel>
                {errors.email && (
                  <Tooltip
                    label={<TooltipEmailText />}
                    aria-label='A tooltip'
                    placement={'right'}
                    bgColor={'white'}
                    border={'1px solid #EEEEF0'}
                    borderRadius={'3px'}
                    color={'black'}
                    fontSize={'10px'}
                    lineHeight={'16px'}
                    fontWeight={500}
                  >
                    <Flex cursor={'pointer'} justify={'center'} mt={'2px'}>
                      <Icon as={() => infoIcon} />
                    </Flex>
                  </Tooltip>
                )}
              </Flex>
              <InputGroup>
                <InputLeftElement
                  pointerEvents='none'
                  children={<Icon as={() => emailIcon} />}
                />
                <Input
                  id='email'
                  color={'#505A66'}
                  bgColor={'white'}
                  fontSize={'14px'}
                  lineHeight={'17px'}
                  fontWeight={600}
                  shadow={'0px 2px 10px rgba(0, 0, 0, 0.05)'}
                  {...register('email', {
                    required: 'This is required',
                    pattern: {
                      value:
                        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                      message: 'Invalid email address',
                    },
                  })}
                  onChange={onChangeEmail}
                />
                {!errors.email && watchEmail && isSubmitting && (
                  <InputRightElement
                    pointerEvents='none'
                    children={<Icon as={() => doneIcon} />}
                  />
                )}
              </InputGroup>

              {/* <FormErrorMessage>
                {errors.email && errors.email.message}
              </FormErrorMessage> */}
            </FormControl>
          </VStack>

          <ButtonComp text={'Send'} active isLoading={isSubmitting} />
        </form>
      </Flex>
    </Flex>
  )
}
