import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  colors: {
    brand: {
      50: '#e6f1ff',
      100: '#b3d4ff',
      200: '#80b7ff',
      300: '#4d9aff',
      400: '#1a7dff',
      500: '#0066ff', // Primary blue
      600: '#0052cc',
      700: '#003d99',
      800: '#002966',
      900: '#001433',
    }
  },
  styles: {
    global: {
      body: {
        bg: 'white',
        color: 'gray.800'
      }
    }
  },
  components: {
    Button: {
      defaultProps: {
        colorScheme: 'brand'
      }
    },
    Link: {
      baseStyle: {
        color: 'brand.500',
        _hover: {
          color: 'brand.600',
          textDecoration: 'none'
        }
      }
    }
  }
})

export default theme 