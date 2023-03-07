import { SetStateAction, useState } from 'react'
import {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
} from '@chakra-ui/react'

type RangeSliderProps = {
  value: number
  setValue: (e: SetStateAction<number>) => void
}

export function RangeSlider({ value, setValue }: RangeSliderProps) {
  function handleChange(e: SetStateAction<number>) {
    setValue(e)
  }

  return (
    <Slider
      aria-label='slider-ex-1'
      defaultValue={30}
      value={value}
      onChange={handleChange}
      w={'120px'}
    >
      <SliderTrack
        bg='red.100'
        h={'20px'}
        border={'1px solid'}
        borderColor={'#D8246C'}
        bgGradient={
          'linear-gradient(90deg, rgba(217, 217, 217, 0) 0%, #FF8DBB 84.9%)'
        }
      >
        <SliderFilledTrack bg='transparent' />
      </SliderTrack>
      <SliderThumb
        h={'30px'}
        w={'6px'}
        bgColor={'#D8246C'}
        borderRadius={0}
      ></SliderThumb>
    </Slider>
  )
}
