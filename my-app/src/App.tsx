import * as React from "react"
import { ChakraProvider } from "@chakra-ui/react"

import  Container  from './Components/Container/container'
import  myNewTheme  from './Styles/theme';


export const App = () => (
  <ChakraProvider theme={myNewTheme}>
    <Container/>
  </ChakraProvider>
)
