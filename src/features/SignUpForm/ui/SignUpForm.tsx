/* eslint-disable react/no-children-prop */
import {
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Text,
  VStack,
  Link,
  InputGroup,
  InputLeftElement,
  Icon,
  Tooltip,
  Image,
  InputRightElement,
} from '@chakra-ui/react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { emailIcon } from '../../../../public/assets/icons/email-icon'
import { keyIcon } from '../../../../public/assets/icons/key-icon'
import { starIcon } from '../../../../public/assets/icons/star-icon'
import { infoIcon } from '../../../../public/assets/icons/info-icon'
import { useState } from 'react'
import { TooltipPasswordText } from 'shared/TooltipPasswordText'
import { doneIcon } from '../../../../public/assets/icons/done-icon'
import { TooltipEmailText } from 'shared/TooltipEmailText'
import { notesIcon } from '../../../../public/assets/icons/notes-icon'
import { eyeIcon } from '../../../../public/assets/icons/eye-icon'
import { TooltipConfirmPasswordText } from 'shared/TooltipConfirmPasswordText'
import { debounce } from 'debounce'
import { useAppDispatch } from 'entities/redux/store'
import { isSession } from 'entities/redux/slices/isSessionSlice'
import { ButtonComp } from 'shared/ButtonComp'

type Inputs = {
  name: string
  email: string
  password: string
  confirmPassword: string
  required: string
}

type SignInFormProps = {
  handleSignIn: () => void
}

export const SignUpForm = ({ handleSignIn }: SignInFormProps) => {
  const [isHovering, setIsHovering] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  const dispatch = useAppDispatch()

  const {
    handleSubmit,
    register,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<Inputs>()

  const onChangeName = () => {
    debounce(() => {
      watch('name')
    }, 300)
  }
  const onChangeEmail = () => {
    debounce(() => {
      watch('email')
    }, 300)
  }
  const onChangePassword = () => {
    debounce(() => {
      watch('password')
    }, 300)
  }
  const onChangeConfirmPassword = () => {
    debounce(() => {
      watch('confirmPassword')
    }, 300)
  }

  const watchName = watch('name')
  const watchEmail = watch('email')
  const watchPassword = watch('password', '')
  const watchConfirmPassword = watch('confirmPassword')

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    return new Promise((res) => {
      setTimeout(() => {
        try {
          console.log(JSON.stringify(data, null, 2))
          dispatch(isSession(true))
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

  const handleMouseOver = () => {
    setIsHovering(true)
  }

  const handleMouseOut = () => {
    setIsHovering(false)
  }

  return (
    <Flex
      direction={'column'}
      align={'center'}
      justify={'center'}
      maxW={'365px'}
      w={'100%'}
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
        Sign Up
      </Heading>
      <Flex w='100%' mb={'45px'}>
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
              {isSubmitting ? 'You are ready to go' : 'All fields is required'}
            </Text>

            <FormControl isInvalid={!!errors.name} w='100%'>
              <Flex>
                <Icon as={() => starIcon} />
                <FormLabel htmlFor='name' ml={'10px'}>
                  Name
                </FormLabel>
                {errors.name && (
                  <Tooltip
                    label={'Please enter a name'}
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
                  children={<Icon as={() => notesIcon} />}
                />
                <Input
                  id='name'
                  type={'text'}
                  color={'#505A66'}
                  bgColor={'white'}
                  fontSize={'14px'}
                  lineHeight={'17px'}
                  fontWeight={600}
                  shadow={'0px 2px 10px rgba(0, 0, 0, 0.05)'}
                  {...register('name', {
                    required: 'This is required',
                    minLength: {
                      value: 3,
                      message: 'Name must be at least 3 characters',
                    },
                  })}
                  onChange={onChangeName}
                />
                {!errors.name && watchName && isSubmitting && (
                  <InputRightElement
                    pointerEvents='none'
                    children={<Icon as={() => doneIcon} />}
                  />
                )}
              </InputGroup>

              {/* <FormErrorMessage>
                {errors.name && errors.name.message}
              </FormErrorMessage> */}
            </FormControl>
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
            <FormControl isInvalid={!!errors.password}>
              <Flex>
                <Icon as={() => starIcon} />
                <FormLabel htmlFor='name' mx={'10px'}>
                  Password
                </FormLabel>
                {(errors.password || errors.confirmPassword) && (
                  <Tooltip
                    label={
                      errors.confirmPassword ? (
                        <TooltipConfirmPasswordText />
                      ) : (
                        <TooltipPasswordText />
                      )
                    }
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
                  children={<Icon as={() => keyIcon(showPassword)} />}
                />
                <Input
                  id='password'
                  fontSize={'14px'}
                  lineHeight={'17px'}
                  fontWeight={600}
                  bgColor={'white'}
                  shadow={'0px 2px 10px rgba(0, 0, 0, 0.05)'}
                  type={showPassword ? 'text' : 'password'}
                  {...register('password', {
                    pattern: {
                      value:
                        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,}$/,
                      message: '',
                      // 'Password must contain at least 8 characters with at least one uppercase letter, one lowercase letter, one number and one special character',
                    },
                    required: 'This is required',
                  })}
                  onChange={onChangePassword}
                />
                {!errors.password && watchPassword && isSubmitting ? (
                  <InputRightElement
                    pointerEvents='none'
                    children={<Icon as={() => doneIcon} />}
                  />
                ) : (
                  <InputRightElement
                    cursor={'pointer'}
                    children={<Icon as={() => eyeIcon} />}
                    onClick={() => setShowPassword(!showPassword)}
                  />
                )}
              </InputGroup>
              {/* <FormErrorMessage>
                {errors.password && errors.password.message}
              </FormErrorMessage> */}
            </FormControl>

            <FormControl isInvalid={!!errors.confirmPassword}>
              <InputGroup>
                <InputLeftElement
                  pointerEvents='none'
                  children={<Icon as={() => keyIcon(showConfirmPassword)} />}
                />
                <Input
                  id='confirmPassword'
                  fontSize={'14px'}
                  lineHeight={'17px'}
                  fontWeight={600}
                  bgColor={'white'}
                  shadow={'0px 2px 10px rgba(0, 0, 0, 0.05)'}
                  type={showConfirmPassword ? 'text' : 'password'}
                  {...register('confirmPassword', {
                    validate: (value) =>
                      value === watchPassword || 'The passwords do not match',
                    pattern: {
                      value:
                        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,}$/,
                      message: '',
                      // 'Password must contain at least 8 characters with at least one uppercase letter, one lowercase letter, one number and one special character',
                    },
                    required: 'This is required',
                  })}
                  onChange={onChangeConfirmPassword}
                />
                {!errors.confirmPassword &&
                watchConfirmPassword &&
                isSubmitting ? (
                  <InputRightElement
                    pointerEvents='none'
                    children={<Icon as={() => doneIcon} />}
                  />
                ) : (
                  <InputRightElement
                    cursor={'pointer'}
                    children={<Icon as={() => eyeIcon} />}
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  />
                )}
              </InputGroup>
              {/* <FormErrorMessage>
                {errors.confirmPassword && errors.confirmPassword.message}
              </FormErrorMessage> */}
            </FormControl>
          </VStack>

          <ButtonComp text={'Create account'} active isLoading={isSubmitting} />
        </form>
      </Flex>

      <Text
        fontSize={'12px'}
        lineHeight={'15px'}
        fontWeight={500}
        color={'#696C7D'}
        mb={'10px'}
      >
        I already have an account
      </Text>

      <ButtonComp text={'Sign in'} onClick={handleSignIn} />
    </Flex>
  )
}
