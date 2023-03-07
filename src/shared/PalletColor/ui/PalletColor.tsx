import { Box, useOutsideClick } from '@chakra-ui/react'
import { MutableRefObject, useRef, useState } from 'react'

type PalletBlockProps = {
  id: string
  color: string
  setColor: (e: string) => void
}

export const PalletColor = ({ id, color, setColor }: PalletBlockProps) => {
  const [activeColor, setActiveColor] = useState(false)
  const ref = useRef<any>(null)

  // useOutsideClick({
  //   // ref: ref,
  //   // handler: () => {
  //   //   setActiveColor(false)
  //   // },
  // })

  const handleActiveColor = () => {
    setActiveColor((prev) => !prev)
    setColor(color)
  }
  return (
    <Box
      id={id}
      ref={ref}
      key={id}
      h='25px'
      w='25px'
      borderRadius={50}
      bgColor={color}
      border={`${activeColor ? '2px dashed' : '0.5px solid'}`}
      borderColor={'#A0A0A0'}
      cursor={'pointer'}
      shadow={activeColor ? '0px 2px 10px rgba(0, 0, 0, 0.2)' : 'none'}
      onClick={handleActiveColor}
    />
  )
}
