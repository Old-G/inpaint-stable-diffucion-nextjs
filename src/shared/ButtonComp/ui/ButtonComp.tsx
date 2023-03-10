import { Button } from '@chakra-ui/react'

type ButtonCompProps = {
  text: string
  onClick?: () => void
  active?: boolean
  isLoading?: boolean
  uppercase?: boolean
  height?: string
  borderCCC?: boolean
  disabled?: boolean
}

export const ButtonComp = ({
  text,
  onClick,
  active,
  isLoading,
  uppercase,
  height,
  borderCCC,
  disabled,
}: ButtonCompProps) => {
  return (
    <Button
      bgColor={active ? '#D8246C' : 'white'}
      color={active ? 'white' : 'black'}
      p={'0px 105px'}
      border={`1px solid ${
        !active ? (borderCCC ? '#cccccc' : '#D8246C') : '#cccccc'
      }`}
      textTransform={uppercase ? 'uppercase' : undefined}
      borderRadius={'5px'}
      fontSize={'16px'}
      lineHeight={'19px'}
      fontWeight={500}
      onClick={onClick}
      w='100%'
      h={height ? height : '44px'}
      isLoading={isLoading}
      type='submit'
      loadingText='Submitting'
      transition={'all .2s ease-in-out'}
      _hover={{ transform: 'scale(1.1)' }}
      isDisabled={disabled}
    >
      {text}
    </Button>
  )
}
