import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'
import type { StyleFunctionProps } from '@chakra-ui/styled-system'
import { Inter } from 'next/font/google'

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
})

const config = {
  initialColorMode: 'light',
  useSystemColorMode: false,
}

const styles = {
  global: (props: StyleFunctionProps) => ({
    'html, body': {
      fontFamily: 'body',
      fontWeight: '400',
      scrollBehavior: 'smooth',
      color: mode('gray.800', 'whiteAlpha.900')(props),
      bg: mode('white', 'gray.800')(props),
      // lineHeight: 'base',
      // height: '100vh',
      // backgroundAttachment: 'fixed',
    },
  }),
}

const theme = extendTheme({
  config,
  styles,
  colors: {
    brand: {
      black: '#1a202c',
      white: '#ffffffeb',
      pink: '#FF8DBB',
      french: '#FFE8DC',
    },
  },
  fonts: {
    body: inter,
  },
})

export default theme
