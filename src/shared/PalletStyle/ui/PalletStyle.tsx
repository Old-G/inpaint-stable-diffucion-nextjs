import { Box, Text, useOutsideClick } from '@chakra-ui/react'
import { useRef, useState } from 'react'

type PalletStyleProps = {
  id: string
  style: string
  setStylesChoose: (e: string) => void
}

export const PalletStyle = ({
  id,
  style,
  setStylesChoose,
}: PalletStyleProps) => {
  const [activeColor, setActiveColor] = useState(false)
  const ref = useRef(null)

  useOutsideClick({
    ref: ref,
    // handler: () => {
    //   setActiveColor(false)
    // },
  })

  const handleActiveColor = () => {
    setActiveColor((prev) => !prev)
    setStylesChoose(style)
  }
  return (
    <Box
      key={id}
      p='5px 10px'
      borderRadius={10}
      bgColor={'white'}
      border={`${activeColor ? '2px dashed' : '0.5px solid'}`}
      borderColor={'#A0A0A0'}
      cursor={'pointer'}
      shadow={activeColor ? '0px 2px 10px rgba(0, 0, 0, 0.2)' : 'none'}
      onClick={handleActiveColor}
    >
      <Text fontSize={'12px'} lineHeight='15px'>
        {style}
      </Text>
    </Box>
  )
}
