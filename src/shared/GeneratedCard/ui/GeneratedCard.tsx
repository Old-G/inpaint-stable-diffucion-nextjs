'use client'

import { Flex, Icon, Image } from '@chakra-ui/react'
import { useState } from 'react'
import { CanvasFooter } from 'shared/CanvasFooter'
import { closeIcon } from '../../../../public/assets/icons/close-icon'

type GeneratedCardProps = {
  image: string
  idx: number
}

export const GeneratedCard = ({ image, idx }: GeneratedCardProps) => {
  const [openCard, setOpenCard] = useState(false)

  const handleOpen = () => {
    setOpenCard(true)
  }

  const handleClose = () => {
    setOpenCard(false)
  }

  return (
    <>
      {!openCard ? (
        <Flex
          direction={'column'}
          position='relative'
          justify={'center'}
          align={'center'}
          overflow='hidden'
          h={'710px'}
          maxW={'500px'}
          w='100%'
          border={'1px solid'}
          borderColor={'#D8246C'}
          borderRadius={'15px'}
          bgGradient={
            'linear-gradient(38.84deg, rgba(255, 141, 187, 0.351) 0%, rgba(255, 237, 199, 0.7) 100%)'
          }
          shadow={'0px 2px 10px rgba(0, 0, 0, 0.05)'}
          transition='transform 0.5s ease-in-out'
        >
          <Image
            src={`data:image/png;base64,${image}`}
            alt={'image'}
            onClick={handleOpen}
            cursor={'pointer'}
            m='auto 0'
          />

          <CanvasFooter idx={idx} />
        </Flex>
      ) : (
        <Flex
          position={'absolute'}
          zIndex={9997}
          top={'0'}
          left={'50%'}
          w={'100%'}
          h={'100%'}
          bgGradient={'linear-gradient(38.84deg, #FFCDE1 0%, #FFEDC7 100%)'}
          transform={'translate(-50%, 0)'}
          shadow={'0px 2px 10px rgba(0, 0, 0, 0.05)'}
          transition='all 0.5s ease-in-out'
        >
          <Flex
            zIndex={9998}
            position={'relative'}
            w='100%'
            h='100%'
            left={'50%'}
            transform={'translate(-50%, 0)'}
            justify={'center'}
            align={'center'}
          >
            <Flex
              direction={'column'}
              justify={'center'}
              align={'center'}
              overflow='hidden'
            >
              <Image
                src={`data:image/png;base64,${image}`}
                alt={'image'}
                m='auto 0'
              />

              <CanvasFooter idx={idx} />
            </Flex>
          </Flex>
          <Flex
            position={'absolute'}
            top={'25px'}
            right={'25px'}
            zIndex={9999}
            h={'60px'}
            w={'60px'}
            onClick={handleClose}
            cursor={'pointer'}
          >
            <Icon as={() => closeIcon(true)} />
          </Flex>
        </Flex>
      )}
    </>
  )
}
