'use client'

import { VStack } from '@chakra-ui/react'
import { NavBlock } from 'shared/NavBlock'
import { PalletBlock } from 'shared/PalletBlock'

const colors = [
  {
    id: '1',
    color: '#ce1515',
  },
  {
    id: '2',
    color: '#060606',
  },
  {
    id: '3',
    color: '#2ca340',
  },
  {
    id: '4',
    color: '#150fc7',
  },
  {
    id: '5',
    color: '#a4590e',
  },
  {
    id: '6',
    color: '#ace812',
  },
  {
    id: '7',
    color: '#9b0c3a',
  },
  {
    id: '8',
    color: '#ad159d',
  },
  {
    id: '9',
    color: '#0a24b4',
  },
  {
    id: '10',
    color: '#0980ab',
  },
  {
    id: '11',
    color: '#0a9673',
  },
  {
    id: '12',
    color: '#b0a116',
  },
  {
    id: '13',
    color: '#ebe3e9',
  },
]

const styles = [
  {
    id: '1',
    style: 'cocktail',
  },
  {
    id: '2',
    style: 'zara',
  },
  {
    id: '3',
    style: 'office',
  },
  {
    id: '4',
    style: 'burning man',
  },
  {
    id: '5',
    style: 'superheroes',
  },
  {
    id: '6',
    style: 'cocktail',
  },
  {
    id: '7',
    style: 'zara',
  },
  {
    id: '8',
    style: 'office',
  },
  {
    id: '9',
    style: 'burning man',
  },
  {
    id: '10',
    style: 'cocktail',
  },
  {
    id: '11',
    style: 'zara',
  },
  {
    id: '12',
    style: 'superheroes',
  },
  {
    id: '13',
    style: 'superheroes',
  },
]

export const Sidebar = () => {
  return (
    <VStack
      w='340px'
      bgColor={'gray.100'}
      bgGradient='linear-gradient(38.84deg, rgba(255, 141, 187, 0.33) 0%, rgba(255, 237, 199, 0.7) 100%)'
      shadow={'0px 2px 10px rgba(0, 0, 0, 0.05)'}
      borderRadius={'0px 15px 15px 0px'}
      spacing={'20px'}
    >
      <NavBlock />

      <PalletBlock colors={colors} styles={styles} />
    </VStack>
  )
}
