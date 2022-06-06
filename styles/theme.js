import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({ 
  fonts: {
    body: 'Inter, sans-serif'
  },
  fontWeights: {
    normal: 400,
    medium: 600,
    bold: 700
  }
 })

export default theme