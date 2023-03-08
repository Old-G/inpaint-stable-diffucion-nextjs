import { Button } from '@chakra-ui/react'

type ButtonCompProps = {
  text: string
  onClick?: () => void
  active?: boolean
}

export const ButtonComp = ({
  text,
  onClick,
  active,
  ...props
}: ButtonCompProps) => {
  return (
    <Button
      {...props}
      bgColor={active ? '#D8246C' : 'white'}
      color={active ? 'white' : 'black'}
      p={'0px 105px'}
      h='32px'
      border={'1px solid #cccccc'}
      borderRadius={'5px'}
      fontSize={'16px'}
      lineHeight={'19px'}
      fontWeight={500}
      textTransform={'uppercase'}
      onClick={onClick}
    >
      {text}
    </Button>
  )
}
