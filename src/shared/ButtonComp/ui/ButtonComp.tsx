import { Button } from '@chakra-ui/react'

type ButtonCompProps = {
  text: string
  onClick?: () => void
}

export const ButtonComp = ({ text, onClick, ...props }: ButtonCompProps) => {
  return (
    <Button
      {...props}
      colorScheme={'pink'}
      p={'10px 30px'}
      borderRadius={'12px'}
      onClick={onClick}
    >
      {text}
    </Button>
  )
}
