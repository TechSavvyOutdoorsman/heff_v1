import { ChakraProvider } from '@chakra-ui/react'
import Theme from '../libs/Theme'
import '@fontsource/fredoka'


function MyApp({ Component, pageProps }) {
  return (
  <ChakraProvider theme={Theme}>
    <Component {...pageProps} />
  </ChakraProvider>
  )
}

export default MyApp
